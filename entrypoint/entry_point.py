from flask import Flask, request, abort
from kafka import KafkaProducer
import json
import os

app = Flask(__name__)

ROUTE = os.environ['ROUTE']
TOPIC_INPUT = os.environ['TOPIC_INPUT']
VALUE_SERIALIZER = os.environ['VALUE_SERIALIZER']
BOOTSTRAP_SERVERS = os.environ['BOOTSTRAP_SERVERS']
KAFKA_VERSION = tuple(map(int, os.environ['KAFKA_VERSION'].split('.')))
COMPRESSION = os.getenv('COMPRESSION')  # might return None


def json_serializer(data):
	return json.dumps(data).encode('utf-8')


if VALUE_SERIALIZER == 'json':
	value_serializer = json_serializer
else:
	raise ValueError("value_serializer_type must be 'json'")


producer = KafkaProducer(
	bootstrap_servers=BOOTSTRAP_SERVERS,
	key_serializer=str.encode,
	value_serializer=value_serializer,
	compression_type=COMPRESSION,
	api_version=KAFKA_VERSION
)


@app.route(ROUTE, methods=['POST'])
def add():

	if request.content_type == 'application/json; charset=utf-8' and VALUE_SERIALIZER == 'json':

		data = request.get_json()

		if data is not None:

			producer.send(
				topic=TOPIC_INPUT,
				key=None,
				value=data,
				headers=[
					('content-type', b'application/json; charset=utf-8')
				]
			)

		abort(400)

	abort(400)


if __name__ == "__main__":

	app.run(host='0.0.0.0', port=80)