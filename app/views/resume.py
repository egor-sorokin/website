from flask import Blueprint, session, jsonify
from app.models import Person, WorkExperience, Project, Skill, Education
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


@mod.route('/work_experience', methods=['GET'], strict_slashes=False)
def work_experience():
    work_experience = WorkExperience.query.all()
    if work_experience:
        return jsonify(workExperience=[i.serialize for i in work_experience]), 200
    return abort(404)


@mod.route('/projects', methods=['GET'], strict_slashes=False)
def projects():
    projects = Project.query.all()
    if projects:
        return jsonify(projects=[i.serialize for i in projects]), 200
    return abort(404)


@mod.route('/skills', methods=['GET'], strict_slashes=False)
def skills():
    skills = Skill.query.all()
    if skills:
        return jsonify(skills=[i.serialize for i in skills]), 200
    return abort(404)


@mod.route('/educations', methods=['GET'], strict_slashes=False)
def educations():
    educations = Education.query.all()
    if educations:
        return jsonify(educations=[i.serialize for i in educations]), 200
    return abort(404)
