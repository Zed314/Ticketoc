from enum import Enum
from flask import Flask, request, abort, jsonify
from kafka import KafkaProducer
from kafka.errors import KafkaTimeoutError
import json
import os
import io
import logging
import avro.schema
from avro.io import DatumReader


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
		test_schema = test_schema = '''
{
    "namespace": "avro.ticketoc",
    "type": "record",
    "name": "Receipt",
    "fields": [
        {
            "name": "cashReceiptID",
            "type": "string"
        },
		{
			"name": "storeID",
			"type": "string"
		},
        {
            "name": "terminalID",
            "type": "string"
        },
        {
            "name": "agentID",
            "type": "string"
        },
		{
            "name": "customerID",
            "type": "string"
        },
        {
            "name": "date",
            "type": "string"
        },
        {
            "name": "documentTotal",
			"type": {
				"type": "record",
				"name":"documentTotalBis",
   			"fields": [
      			{
        		"name": "netTotal",
        		"type": "float"
      			},
      			{
        		"name": "taxPayable",
        		"type": "float"
      			},
      			{
        		"name": "grossTotal",
        		"type": "float"
      			}
    		]
			}


        },
        {
            "name": "settlements",
            "type": {
                "type": "array",
                "items": {
                    "namespace": "avro.ticketoc",
                    "name": "Line",
                    "type": "record",
                    "fields": [
                        {
                            "name": "paymentMechanism",
                            "type": {
                                "type": "enum",
                                "name": "auie",
                                "symbols": [
                                    "Especes",
                                    "CB"
                                ]
                            }
                        },
                        {
                            "name": "settlementAmount",
                            "type": "float"
                        }
                    ]
                }
            }
        },
        {
            "name": "lines",
            "type": {
                "type": "array",
                "items": {
                    "namespace": "avro.ticketoc.Receipt",
                    "name": "Line",
                    "type": "record",
                    "fields": [
                        {
                            "name": "lineNumber",
                            "type": "int"
                        },
                        {
                            "name": "productCode",
                            "type": "string"
                        },
                        {
                            "name": "productDescription",
                            "type": "string"
                        },
                        {
                            "name": "productCategoryCode",
                            "type": "string"
                        },
                        {
                            "name": "productCategoryName",
                            "type": "string"
                        },
                        {
                            "name": "quantity",
                            "type": "int"
                        },
                        {
                            "name": "unitOfMeasure",
                            "type": "string"
                        },
                        {
                            "name": "unitPrice",
                            "type": "float"
                        },
                        {
                            "name": "taxPercentage",
                            "type": "int"
                        },
                        {
                            "name": "creditAmount",
                            "type": "float"
                        },
                        {
                            "name": "settlementAmount",
                            "type": "float"
                        }
                    ]
                }
            }
        }
    ]
}
'''
		print("A",flush=True) 
		schema = avro.schema.Parse(test_schema)
		print("B") 
		print(request.get_data(),flush=True) 
		
		bytes_reader = io.BytesIO(request.get_data())
		decoder = avro.io.BinaryDecoder(bytes_reader)

		print("Af gd",flush=True)
		print("B2",flush=True)
		reader = avro.io.DatumReader(schema)
		print("C",flush=True)
		user1 = reader.read(decoder)
		print(user1, flush=True)
		headers = [('content-type', b'application/json; charset=utf-8')]
		try:
			future = producer.send(topic=kafka_topic, value=user1, headers=headers)
			future.add_errback(on_send_error)
		except KafkaTimeoutError:
			raise
		return jsonify({'success': True})
#	elif kafka_value_serializer_type == SerializerType.AVRO:
#		print(request)
#		abort(501)
	
	abort(400)


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80, threaded=True)
	producer.close(timeout=60)
