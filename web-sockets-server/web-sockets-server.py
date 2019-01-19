import os
import json
import asyncio
import websockets
from collections  import namedtuple
from kafka        import KafkaConsumer
from asgiref.sync import sync_to_async

kafka_connect                 = os.environ['KAFKA_CONNECT']
kafka_topics                  = os.environ['KAFKA_TOPICS']
kafka_value_deserializer_type = os.environ['KAFKA_VALUE_DESERIALIZER']


def json_deserializer(data):
    return json.loads(data, encoding='utf-8')


kafka_topics = { kafka_topic.strip() for kafka_topic in kafka_topics.split(',') }

if kafka_value_deserializer_type == 'json':
    kafka_value_deserializer = json_deserializer
else:
    raise ValueError("unknown value '{value}' for kafka_value_deserializer_type".format(value=kafka_value_deserializer_type))


class Subscription:

    def __init__(self):
        self._topics = set()
        self._consumer = KafkaConsumer(bootstrap_servers=kafka_connect, value_deserializer=kafka_value_deserializer)
        self._ready = asyncio.Event()

    async def poll(self):
        await self._ready.wait()
        record = await self._poll()
        return record

    @sync_to_async
    def _poll(self):
        return next(self._consumer)

    def add(self, topic):
        self._topics.add(topic)
        self._consumer.subscribe(list(self._topics))
        self._ready.set()

    def remove(self, topic):
        self._topics.remove(topic)

        if len(self._topics):
            self._consumer.subscribe(list(self._topics))
        else:
            self._consumer.unsubscribe()
            self._ready.clear()

    def __contains__(self, topic):
        return topic in self._topics

    def exist(self, topic):
        return topic in self._consumer.topics()

    def __len__(self):
        return len(self._topics)

    def close(self):
        self._consumer.close()


class Controller:

    Message = namedtuple('Message', ['type', 'topic'])

    def __init__(self, client, subscription):
        self._client = client
        self._subscription = subscription

    async def client_to_subscription(self):

        async for message in self._client:

            message = self._parse_message(message)

            if message.type == 'subscribe':
                await self._send_to_client(self._handle_subscribe(message))

            if message.type == 'unsubscribe':
                await self._send_to_client(self._handle_unsubscribe(message))

    async def subscription_to_client(self):

        while True:

            record = await self._subscription.poll()

            await self._send_to_client(self._message_record(record.topic, record.value))

    async def _send_to_client(self, message):

        if not isinstance(message, str):
            message = json.dumps(message)

        await self._client.send(message)

    def _handle_subscribe(self, message):

        if message.topic not in kafka_topics or not self._subscription.exist(message.topic):
            return self._message_not_advertised(message.topic)

        if message.topic in self._subscription:
            return self._message_already_subscribed(message.topic)

        self._subscription.add(message.topic)

        return self._message_subscribed(message.topic)

    def _handle_unsubscribe(self, message):

        if message.topic not in self._subscription:
            return self._message_not_subscribed(message.topic)

        self._subscription.remove(message.topic)

        return self._message_unsubscribed(message.topic)

    def _parse_message(self, message):

        if isinstance(message, str):
            message = json.loads(message, encoding='utf-8')

        return self.Message(type=message['type'], topic=message['topic'])

    @staticmethod
    def _message_already_subscribed(topic):
        return {'type': 'action_answer', 'result': 2, 'note': "Already subscribed to '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_not_subscribed(topic):
        return {'type': 'action_answer', 'result': 2, 'note': "Not subscribed to '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_not_advertised(topic):
        return {'type': 'action_answer', 'result': 2, 'note': "Topic '{topic}' is not advertised".format(topic=topic)}

    @staticmethod
    def _message_subscribed(topic):
        return {'type': 'action_answer', 'result': 0, 'note': "Subscribed to '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_unsubscribed(topic):
        return {'type': 'action_answer', 'result': 0, 'note': "Unsubscribed from '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_record(topic, value):
        return {'type': 'topic_message', 'topic': topic, 'message': value}

    def close(self):
        self._client.close()
        self._subscription.close()


async def connection(socket, path):

    controller = Controller(socket, Subscription())

    client_to_subscription = asyncio.ensure_future(controller.client_to_subscription())
    subscription_to_client = asyncio.ensure_future(controller.subscription_to_client())

    done, pending = await asyncio.wait([client_to_subscription, subscription_to_client], return_when=asyncio.FIRST_COMPLETED)

    for task in pending:
        task.cancel()

    controller.close()


start_server = websockets.serve(connection, '0.0.0.0', 40510)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
