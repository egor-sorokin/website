from flask import Blueprint, session, jsonify
from app.models import Person, Project
from app import db
from flask import abort

mod = Blueprint('resume_api', __name__, url_prefix='/api/v.1.0')


@mod.route('/person', methods=['GET'], strict_slashes=False)
def person():
    try:
        person_data = Person.query.first()
        return jsonify(personData=person_data.serialize), 200
    except:
        return abort(404)


@mod.route('/projects', methods=['GET'], strict_slashes=False)
def projects():
    projects = Project.query.all()
    if projects:
        return jsonify(projects=[i.serialize for i in projects]), 200
    return abort(404)
