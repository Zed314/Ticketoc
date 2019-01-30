import os
from flask   import Flask, abort, jsonify
from pymongo import MongoClient

database = os.environ['DATABASE']

app = Flask('backend')
database = MongoClient('mongodb://{address}/'.format(address=database))


def get_receipt_by_id(receipt_id):
    return database['ticketoc']['receipts'].find_one({"cashReceiptID": receipt_id})


@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
@app.errorhandler(Exception)
def error_handler(error):
    return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route('/v1/receipts/<receipt_id>', methods=['GET'])
def resource_get_receipt_by_id(receipt_id):
    ticket = get_receipt_by_id(receipt_id)
    if ticket is not None:
        del ticket['_id']  # not serializable
        return jsonify(ticket)
    abort(404)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, threaded=True)
    database.close()
