import os
import json
import asyncio
import websockets
import threading
import logging
from websockets.exceptions import ConnectionClosed
from collections           import namedtuple
from kafka                 import KafkaConsumer
from asgiref.sync          import sync_to_async

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.addHandler(logging.StreamHandler())

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


class Subscriptions:

    def __init__(self):
        self._topics = set()
        self._consumer = None
        self._ready = asyncio.Event()
        self._lock = threading.Lock()

    @sync_to_async
    def start(self):
        with self._lock:
            self._new_consumer()

    async def getone(self):
        record = None
        while record is None:
            await self._ready.wait()
            record = await self._poll()
        return record

    @sync_to_async
    def _poll(self):
        with self._lock:
            if self._ready.is_set():
                record = self._consumer.poll(max_records=1, timeout_ms=1000).values()
                if len(record):
                    return next(iter(record))[0]
                else:
                    return None
            else:
                return None

    @sync_to_async
    def add(self, topic):
        with self._lock:
            self._topics.add(topic)
            self._new_consumer(self._topics)

    @sync_to_async
    def remove(self, topic):
        with self._lock:
            self._topics.remove(topic)
            if len(self._topics):
                self._new_consumer(self._topics)
            else:
                self._new_consumer()

    def __contains__(self, topic):
        return topic in self._topics

    def __len__(self):
        return len(self._topics)

    def subscribed_topics(self):
        return self._topics.copy()

    @sync_to_async
    def existing_topics(self):
        return self._consumer.topics()

    def _new_consumer(self, topics=None):

        if self._consumer is not None:
            self._consumer.close()

        self._consumer = KafkaConsumer(*(topics or []), bootstrap_servers=kafka_connect, value_deserializer=kafka_value_deserializer)

        if topics:
            self._ready.set()
        else:
            self._ready.clear()

    @sync_to_async
    def stop(self):
        with self._lock:
            self._consumer.close()


class Controller:

    Message = namedtuple('Message', ['type', 'topic'])

    def __init__(self, client):
        self._client = client
        self._subscriptions = Subscriptions()

    async def run(self):

        await self._subscriptions.start()

        client_to_subscription = asyncio.ensure_future(self._client_to_subscriptions())
        subscription_to_client = asyncio.ensure_future(self._subscriptions_to_client())

        done, pending = await asyncio.wait([client_to_subscription, subscription_to_client], return_when=asyncio.FIRST_COMPLETED)

        for task in pending: task.cancel()

        await  self._subscriptions.stop()

    async def _client_to_subscriptions(self):

        try:

            async for message in self._client:

                message = self._parse_message(message)

                logger.info("_client_to_subscriptions: '{message}'".format(message=message))

                if message.type == 'subscribe':
                    await self._send_to_client(await self._handle_subscribe(message))

                if message.type == 'unsubscribe':
                    await self._send_to_client(await self._handle_unsubscribe(message))

        except ConnectionClosed:
            pass

    async def _subscriptions_to_client(self):

        try:

            while True:

                record = await self._subscriptions.getone()

                logger.info("_subscriptions_to_client: '{record_topic}'".format(record_topic=record.topic))

                await self._send_to_client(self._message_record(record.topic, record.value))

        except ConnectionClosed:
            pass

    async def _send_to_client(self, message):

        if not isinstance(message, str):
            message = json.dumps(message)

        await self._client.send(message)

    async def _handle_subscribe(self, message):

        if message.topic not in kafka_topics:
            return self._message_not_advertised(message.topic)

        if message.topic not in await self._subscriptions.existing_topics():
            return self._message_not_exist(message.topic)

        if message.topic in self._subscriptions:
            return self._message_already_subscribed(message.topic)

        await self._subscriptions.add(message.topic)

        return self._message_subscribed(message.topic)

    async def _handle_unsubscribe(self, message):

        if message.topic not in self._subscriptions:
            return self._message_not_subscribed(message.topic)

        await self._subscriptions.remove(message.topic)

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
    def _message_not_exist(topic):
        return {'type': 'action_answer', 'result': 2, 'note': "Topic '{topic}' doesn't exist".format(topic=topic)}

    @staticmethod
    def _message_subscribed(topic):
        return {'type': 'action_answer', 'result': 0, 'note': "Subscribed to '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_unsubscribed(topic):
        return {'type': 'action_answer', 'result': 0, 'note': "Unsubscribed from '{topic}'".format(topic=topic)}

    @staticmethod
    def _message_record(topic, value):
        return {'type': 'topic_message', 'topic': topic, 'message': value}


async def connection(websocket, path):

    address = websocket.remote_address
    logger.info("new connection: '{address}'".format(address=address))

    controller = Controller(websocket)
    await controller.run()

    logger.info("closed connection: '{address}'".format(address=address))


start_server = websockets.serve(connection, '0.0.0.0', 40510)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
