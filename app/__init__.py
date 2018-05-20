# Import flask and template operators
from flask import Flask, render_template, jsonify

# Import SQLAlchemy
from flask.ext.sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Define the WSGI application object
app = Flask(__name__, static_folder="../static/dist", template_folder="../static/src")

# Configurations
CORS(app)
app.config.from_object('config')

# Define the database object which is imported
# by modules and controllers
db = SQLAlchemy(app)

# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify(error=404, text=str(error)), 404

@app.route('/')
def index():
    return render_template('index.html')

from app.views import resume

app.register_blueprint(resume.mod)

# Build the database:
# This will create the database file using SQLAlchemy
db.create_all()
