from flask import Blueprint, request, session, redirect, url_for, jsonify, render_template
from app import db

mod = Blueprint('resume_api', __name__, url_prefix='/api/v.1.0')


@mod.route('/person', methods=['GET'], strict_slashes=False)
def person():
    print 'data goes here'
    return render_template('index.html')


@mod.route('/work_experience', methods=['GET'], strict_slashes=False)
def work_experience():
    print 'work_experience goes here'
    return render_template('index.html')


@mod.route('/projects', methods=['GET'], strict_slashes=False)
def projects():
    print 'project goes here'
    return render_template('index.html')


@mod.route('/skills', methods=['GET'], strict_slashes=False)
def skills():
    print 'skills goes here'
    return render_template('index.html')


@mod.route('/education', methods=['GET'], strict_slashes=False)
def education():
    print 'education goes here'
    return render_template('index.html')