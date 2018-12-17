from flask import Flask, request, abort
from kafka import KafkaProducer
import json
import os

kafka_connect = os.environ['KAFKA_CONNECT']
kafka_version = tuple(map(int, os.environ['KAFKA_VERSION'].split('.')))
route = os.environ['ROUTE']
topic = os.environ['TOPIC']
value_serializer_type = os.environ['VALUE_SERIALIZER']
compression = os.getenv('COMPRESSION')  # might return None


def json_serializer(data):
	return json.dumps(data).encode('utf-8')


if value_serializer_type != 'json' and value_serializer_type != 'protobuf':
	raise ValueError("value_serializer_type must be 'json' or 'protobuf'")

value_serializer = json_serializer if value_serializer_type == 'json' else None
key_serializer = str.encode

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
	print("Test",sys.err)#just to do an error, because it takes too much time to timeout
	if 'application/json' in request.content_type and value_serializer_type == 'json':
		data = request.get_json()
		if data is not None:
			producer.send(topic=topic, key=None, value=data, headers=[('content-type', b'application/json; charset=utf-8')])
		else:
			abort(400)
	else:
		abort(400)


if __name__ == '__main__':

	app.run(host='0.0.0.0', port=80)
