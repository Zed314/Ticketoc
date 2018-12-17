from enum import Enum
from flask import Flask, request, abort
from kafka import KafkaProducer
import json
import os


class SerializerType(Enum):
	JSON = 'json'
	AVRO = 'avro'
	STRING = 'str'


kafka_connect = os.environ['KAFKA_CONNECT']
kafka_version = tuple(map(int, os.environ['KAFKA_VERSION'].split('.')))
route = os.environ['ROUTE']
topic = os.environ['TOPIC']
value_serializer_type = SerializerType(os.environ['VALUE_SERIALIZER'])
key_serializer_type = SerializerType.STRING
compression = os.getenv('COMPRESSION')


def json_serializer(data):
	return json.dumps(data).encode('utf-8')


def string_serializer(data):
	return str(data).encode('utf-8')


def avro_serializer(data):
	raise NotImplementedError()


serializer = {
	SerializerType.JSON: json_serializer,
	SerializerType.AVRO: avro_serializer,
	SerializerType.STRING: string_serializer
}

value_serializer = serializer[value_serializer_type]
key_serializer = serializer[key_serializer_type]

app = Flask(__name__)
producer = KafkaProducer(
	bootstrap_servers=kafka_connect,
	key_serializer=key_serializer,
	value_serializer=value_serializer,
	compression_type=compression,
	api_version=kafka_version
)


@app.route(route, methods=['POST'])
def add():
	if value_serializer_type == SerializerType.JSON:
		if request.is_json():
			data = request.get_json()
			if data:
				producer.send(topic=topic, key=None, value=data, headers=[('content-type', b'application/json; charset=utf-8')])
			else:
				abort(400)
		else:
			abort(400)
	elif value_serializer_type == SerializerType.AVRO:
		raise NotImplementedError()
	else:
		abort(400)


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, threaded=True)
