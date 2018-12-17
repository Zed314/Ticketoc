from enum import Enum
from flask import Flask, request, abort, jsonify
from kafka import KafkaProducer
import json
import os
import time
import logging


class SerializerType(Enum):
	JSON = 'json'
	AVRO = 'avro'
	STRING = 'str'


route = os.environ['ROUTE']
kafka_connect = os.environ['KAFKA_CONNECT']
kafka_version = tuple(map(int, os.environ['KAFKA_VERSION'].split('.')))
kafka_topic = os.environ['KAFKA_TOPIC']
kafka_value_serializer_type = SerializerType(os.environ['KAFKA_VALUE_SERIALIZER'])
kafka_key_serializer_type = SerializerType.STRING
kafka_compression_type = os.getenv('KAFKA_COMPRESSION')


def json_serializer(data):
	return json.dumps(data).encode('utf-8') if data is not None else None


def string_serializer(data):
	return str.encode(data, 'utf-8') if data is not None else None


def avro_serializer(data):
	raise NotImplementedError()


serializers = {
	SerializerType.JSON: json_serializer,
	SerializerType.AVRO: avro_serializer,
	SerializerType.STRING: string_serializer
}

kafka_value_serializer = serializers[kafka_value_serializer_type]
kafka_key_serializer = serializers[kafka_key_serializer_type]

time.sleep(10)  # delay execution to give time to kafka

app = Flask(__name__)
producer = KafkaProducer(
	bootstrap_servers=kafka_connect,
	key_serializer=kafka_key_serializer,
	value_serializer=kafka_value_serializer,
	compression_type=kafka_compression_type,
	api_version=kafka_version
	# retries, linger_ms, acks...
)  # a producer is threadsafe, but not a consumer


def on_send_error(error):
	logging.error("Failed to send message with error '%s'", error)


@app.route(route, methods=['POST'])
def send():

	if kafka_value_serializer_type == SerializerType.JSON:

		if request.is_json:
			data = request.get_json()
			if data:
				producer.send(
					topic=kafka_topic,
					key=None,
					value=data,
					headers=[('content-type', b'application/json; charset=utf-8')]
				).add_errback(on_send_error)
				return jsonify({'success': True})

	elif kafka_value_serializer_type == SerializerType.AVRO:
		abort(501)

	abort(400)


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, threaded=True)
	producer.close()
