import os
from flask   import Flask, abort, jsonify
from pymongo import MongoClient

database = os.environ['DATABASE']

app = Flask(__name__)
mongo = MongoClient('mongodb://{address}/'.format(address=database))


def get_ticket_by_cash_receipt_id(cash_receipt_id):
    return mongo['ticketoc']['tickets'].find_one({"cashReceiptID": cash_receipt_id})


@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
@app.errorhandler(Exception)
def error_handler(error):
    return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route('/v1/tickets/<cash_receipt_id>', methods=['GET'])
def resource_get_ticket_by_cash_receipt_id(cash_receipt_id):
    ticket = get_ticket_by_cash_receipt_id(cash_receipt_id)
    del ticket['_id']  # not serializable
    if ticket is not None:
        return jsonify(ticket)
    abort(404)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, threaded=True)
    mongo.close()
