from enum import Enum
from flask import Flask, request, abort, jsonify
from kafka import KafkaProducer
from kafka.errors import KafkaTimeoutError
import json
import os
import logging
import avro


class SerializerType(Enum):
	JSON = 'json'
	AVRO = 'avro'


route = os.environ['ROUTE']
kafka_connect = os.environ['KAFKA_CONNECT']
kafka_topic = os.environ['KAFKA_TOPIC']
kafka_value_serializer_type = SerializerType(os.environ['KAFKA_VALUE_SERIALIZER'])
kafka_compression_type = os.getenv('KAFKA_COMPRESSION')


def json_serializer(data):
	return json.dumps(data).encode('utf-8')


def avro_serializer(data):
	raise NotImplementedError()


serializers = {
	SerializerType.JSON: json_serializer,
	SerializerType.AVRO: avro_serializer,
}

kafka_value_serializer = serializers[kafka_value_serializer_type]


def make_producer():
	return KafkaProducer(
		bootstrap_servers=kafka_connect,
		value_serializer=kafka_value_serializer,
		compression_type=kafka_compression_type
		# retries, linger_ms, acks...
	)  # a producer is threadsafe, but not a consumer


app = Flask(__name__)
producer = make_producer()


def on_send_error(error):
	logging.error("Failed to send message with error '%s'", error)


@app.errorhandler(Exception)
@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
def error_handler(error):
	return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route(route, methods=['POST'])
def send():
	if request.is_json:
		data = request.get_json()
		if data:
			headers = [('content-type', b'application/json; charset=utf-8')]
			try:
				future = producer.send(topic=kafka_topic, value=data, headers=headers)
				future.add_errback(on_send_error)
			except KafkaTimeoutError:
				raise
			return jsonify({'success': True})
	else:
		print("Not json",flush=True)
		# test_schema = '''
		# {
		# 	"namespace": "example.avro",
 		# 	"type": "record",
 		# 	"name": "User",
 		# 	"fields": [
    	# 			{"name": "name", "type": "string"},
    	# 			{"name": "favorite_number",  "type": ["int", "null"]},
		# 		     {"name": "favorite_color", "type": ["string", "null"]}
 		# 		]
		# 	}
		# 	'''

		# 	schema = avro.schema.Parse(test_schema)
		# 	#bytes_reader = io.BytesIO(raw_bytes)
		# 	try:
		# 		decoder = avro.io.BinaryDecoder(request.get_data())
		# 	except Exception as ex:
		# 		print("Error:")
		# 		print(ex,flush=True) 
		# 	print("Af gd",flush=True)
		# 	reader = avro.io.DatumReader(schema)
		# 	user1 = reader.read(decoder)
		# 	user2 = reader.read(decoder)
		# 	print(user1, flush=True)
	
#	elif kafka_value_serializer_type == SerializerType.AVRO:
#		print(request)
#		abort(501)
	
	abort(400)


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, threaded=True)
	producer.close(timeout=60)
