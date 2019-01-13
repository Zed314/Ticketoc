import json
import os
from enum import Enum
from flask import Flask, abort, jsonify, request
from kafka import KafkaProducer
from kafka.errors import KafkaTimeoutError


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
    return data


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
    app.logger.error("Failed to send message with error '%s'", error)


@app.errorhandler(Exception)
@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
def error_handler(error):
    return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route(route, methods=['POST'])
def post_message():

    data = None
    headers = None
    if kafka_value_serializer_type == SerializerType.JSON:
        data = request.get_json()
        headers = [('content-type', b'application/json; charset=utf-8')]
    elif kafka_value_serializer_type == SerializerType.AVRO:
        data = request.get_data()
        headers = [('content-type', b'application/avro')]

    if data is not None:
        try:
            future = producer.send(topic=kafka_topic, value=data, headers=headers)
            future.add_errback(on_send_error)
        except KafkaTimeoutError:
            raise
        return jsonify({'success': True})

    abort(400)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, threaded=True)
    producer.close(timeout=60)
