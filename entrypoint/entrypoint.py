import os
import json
from flask import Flask, abort, jsonify, request
from kafka import KafkaProducer

route                       = os.environ['ROUTE']
kafka_connect               = os.environ['KAFKA_CONNECT']
kafka_topic                 = os.environ['KAFKA_TOPIC']
kafka_value_serializer_type = os.environ['KAFKA_VALUE_SERIALIZER']


def json_serializer(data):
    return json.dumps(data).encode('utf-8')


def avro_serializer(data):
    return data


if kafka_value_serializer_type == 'json':
    kafka_value_serializer = json_serializer
elif kafka_value_serializer_type == 'avro':
    kafka_value_serializer = avro_serializer
else:
    raise ValueError("unknown value '{value}' for kafka_value_serializer_type".format(value=kafka_value_serializer_type))


app = Flask(__name__)
producer = KafkaProducer(
    bootstrap_servers=kafka_connect,
    value_serializer=kafka_value_serializer,
    compression_type='gzip',
    retries=2,
)


def on_send_error(error):
    app.logger.error("Failed to send message with error '%s'", error)


@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
@app.errorhandler(Exception)
def error_handler(error):
    return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route(route, methods=['POST'])
def post_message():

    data = None
    headers = None
    if kafka_value_serializer_type == 'json':
        data = request.get_json()
        headers = [('content-type', b'application/json; charset=utf-8')]
    elif kafka_value_serializer_type == 'avro':
        data = request.get_data()
        headers = [('content-type', b'application/avro')]

    if data is not None:
        future = producer.send(topic=kafka_topic, value=data, headers=headers)
        future.add_errback(on_send_error)
        return jsonify({'success': True})

    abort(400)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, threaded=True)
    producer.close(timeout=60)
