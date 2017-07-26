from app import db


class Base(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    data_created = db.Column(db.Integer, default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())


class Person(Base):
    __tablename__ = 'person'

    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128))
    phone = db.Column(db.String(128), unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    summary = db.Column(db.Text)
    work_experiences = db.relationship('WorkExperience', backref='person', lazy='dynamic')
    skills = db.relationship('Skill', backref='person', lazy='dynamic')
    education = db.relationship('Education', backref='person', lazy='dynamic')

    def __init__(self, first_name, last_name, phone, email, summary):
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.email = email
        self.summary = summary

    @property
    def serialize(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'email': self.email,
            'summary': self.summary,
        }


class WorkExperience(Base):
    __tablename__ = 'work_experience'

    company = db.Column(db.String(128), nullable=False)
    position = db.Column(db.String(256), nullable=False)
    date = db.Column(db.String(128), nullable=False)
    location = db.Column(db.String(128), nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))
    projects = db.relationship('Project', backref='work_experience', lazy='joined')

    def __init__(self, company, position, date, location, person_id):
        self.company = company
        self.position = position
        self.date = date
        self.location = location
        self.person_id = person_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'company': self.company,
            'position': self.position,
            'date': self.date,
            'location': self.location,
            'person_id': self.person_id
        }


class Project(Base):
    __tablename__ = 'project'

    project = db.Column(db.String(128), nullable=False, unique=True)
    project_description = db.Column(db.Text)
    project_url = db.Column(db.Text, unique=True)
    work_experience_id = db.Column(db.Integer, db.ForeignKey('work_experience.id'))

    def __init__(self, project, project_description, project_url, work_experience_id):
        self.project = project
        self.project_description = project_description
        self.project_url = project_url
        self.work_experience_id = work_experience_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'project': self.project,
            'project_description': self.project_description,
            'project_url': self.project_url,
            'work_experience_id': self.work_experience_id,
        }


class Skill(Base):
    __tablename__ = 'skill'

    category = db.Column(db.String(256), nullable=False, unique=True)
    skills = db.Column(db.Text, nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))

    def __init__(self, category, skills, person_id):
        self.category = category
        self.skills = skills
        self.person_id = person_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'category': self.category,
            'skills': self.skills,
            'person_id': self.person_id,
        }


class Education(Base):
    __tablename__ = 'education'

    place = db.Column(db.String(256), nullable=False)
    degree = db.Column(db.String(256), nullable=False)
    date = db.Column(db.String(128), nullable=False)
    location = db.Column(db.String(128), nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))

    def __init__(self, place, degree, date, location, person_id):
        self.place = place
        self.degree = degree
        self.date = date
        self.location = location
        self.person_id = person_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'place': self.place,
            'degree': self.degree,
            'date': self.date,
            'location': self.location,
            'person_id': self.person_id,
        }
