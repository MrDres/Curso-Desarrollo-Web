import flask

from flask import Flask
app = Flask(__name__)
@app.router("/")

def home():
    return "hola, Flask"

if __name__=='__main__':
    app.run(debug=True)
