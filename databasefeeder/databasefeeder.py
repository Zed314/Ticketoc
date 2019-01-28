import os
import json
import asyncio
import threading
import logging
import jwt
import urllib.request
import requests
import io
from pymongo import MongoClient
from urllib.request import HTTPError
from collections import namedtuple
from kafka import KafkaConsumer
from asgiref.sync import sync_to_async
import avro.schema
from avro.io import DatumReader

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.addHandler(logging.StreamHandler())

kafka_connect = os.environ['KAFKA_CONNECT']
kafka_topics = os.environ['KAFKA_TOPICS']
kafka_value_deserializer_type = os.environ['KAFKA_VALUE_DESERIALIZER']
schema_registry            = os.environ['SCHEMA_REGISTRY']
database = os.environ['DATABASE']



client = MongoClient('mongodb://{address}/'.format(address=database))

persistance = client["persistance"]
tickets = persistance["tickets"]

def getProductSchema():
    return requests.get('http://{address}/v1/schemas/receipt'.format(address=schema_registry)).text

schema = avro.schema.Parse(getProductSchema())
avro_reader = avro.io.DatumReader(schema)

def json_deserializer(data):
    return json.loads(data, encoding='utf-8')

def avro_deserializer(data):
    bytes_reader = io.BytesIO(data)
    decoder = avro.io.BinaryDecoder(bytes_reader)

    return avro_reader.read(decoder)


kafka_topics = {kafka_topic.strip() for kafka_topic in kafka_topics.split(',')}


if kafka_value_deserializer_type == 'json':
    kafka_value_deserializer = json_deserializer
elif kafka_value_deserializer_type == 'avro':
    kafka_value_deserializer = avro_deserializer
else:
    raise ValueError("unknown value '{value}' for kafka_value_deserializer_type".format(
        value=kafka_value_deserializer_type))


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
                record = self._consumer.poll(
                    max_records=1, timeout_ms=1000).values()
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
        with self._lock:
            return self._consumer.topics()

    def _new_consumer(self, topics=None):

        if self._consumer is not None:
            self._consumer.close()
        self._consumer = KafkaConsumer(
            *(topics or []), bootstrap_servers=kafka_connect, value_deserializer=kafka_value_deserializer)
        if topics:
            self._ready.set()
        else:
            self._ready.clear()

    @sync_to_async
    def stop(self):
        with self._lock:
            self._consumer.close()


class Controller:

    Message = namedtuple('Message', ['type', 'topic', 'token'])

    def __init__(self):

        self._subscriptions = Subscriptions()
        print(kafka_topics, flush=True)

    async def run(self):
        await self._subscriptions.start()
        await self._subscriptions.add(kafka_topics.pop())
        subscription_to_client = asyncio.ensure_future(
            self._subscriptions_to_client())
        done, pending = await asyncio.wait([subscription_to_client], return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()

        await  self._subscriptions.stop()

    async def _subscriptions_to_client(self):

        while True:
            record = await self._subscriptions.getone()
            logger.info("_subscriptions_to_client: '{record_topic}'".format(
                record_topic=record.topic))
            print(record,flush=True)
            tickets.insert(record.value)
            #print("List:")
            #for ticket in tickets.find({}):
            #    print(ticket, flush=True)



    def _parse_message(self, message):

        if isinstance(message, str):
            message = json.loads(message, encoding='utf-8')

        return self.Message(type=message['type'], topic=message['topic'], token=message.get('token', None))



controller = Controller()

loop = asyncio.get_event_loop()
loop.run_until_complete(controller.run())

