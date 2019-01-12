import glob
import json
from pathlib import Path
from flask import Flask, abort, jsonify


schemas = {
    Path(path).stem: json.loads(Path(path).read_text(encoding='utf-8')) for path in glob.glob('schemas/*.json')
}

assert len(schemas)

app = Flask(__name__)


@app.errorhandler(Exception)
@app.errorhandler(404)
@app.errorhandler(400)
@app.errorhandler(501)
@app.errorhandler(500)
def error_handler(error):
    return jsonify({'error': str(error)}), getattr(error, 'code', 500)


@app.route('/v1/schemas/<name>', methods=['GET'])
def get_schema(name):
    
    if name in schemas:
        return jsonify(schemas[name])

    abort(400)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, threaded=True)
