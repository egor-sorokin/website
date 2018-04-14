from flask import Blueprint, session, jsonify
from app.models import Person, WorkExperience, Project, Skill, Education
from app import db

mod = Blueprint('resume_api', __name__, url_prefix='/api/v.1.0')


@mod.route('/person', methods=['GET'], strict_slashes=False)
def person():
    person_data = Person.query.first()
    return jsonify(personData=person_data.serialize), 200


@mod.route('/work_experience', methods=['GET'], strict_slashes=False)
def work_experience():
    work_experience = WorkExperience.query.all()
    return jsonify(workExperience=[i.serialize for i in work_experience]), 200


@mod.route('/projects', methods=['GET'], strict_slashes=False)
def projects():
    projects = Project.query.all()
    return jsonify(projects=[i.serialize for i in projects]), 200


@mod.route('/skills', methods=['GET'], strict_slashes=False)
def skills():
    skills = Skill.query.all()
    return jsonify(skills=[i.serialize for i in skills]), 200


@mod.route('/educations', methods=['GET'], strict_slashes=False)
def educations():
    educations = Education.query.all()
    return jsonify(educations=[i.serialize for i in educations]), 200
