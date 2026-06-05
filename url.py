from flask import Flask, render_template, request, jsonify
import random
import string

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shorten', methods=['POST'])
def shorten():
    data = request.get_json()
    url = data.get('url')

    code = ''.join(random.choices(string.ascii_letters + string.digits, k=6))

    short_url = f"http://127.0.0.1:5000/{code}"

    return jsonify({
        "short_url": short_url
    })

if __name__ == '__main__':
    app.run(debug=True)