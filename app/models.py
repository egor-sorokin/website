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
    email = db.Column(db.String(128), nullable=False, unique=True)
    summary = db.Column(db.Text)
    social_network = db.relationship('SocialNetwork', backref='person', lazy='dynamic')
    attachment = db.relationship('Attachment', backref='person', lazy='dynamic')
    project = db.relationship('Project', backref='person', lazy='dynamic')

    def __init__(self, first_name, last_name, email, summary):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.summary = summary

    @property
    def serialize(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'summary': self.summary,
        }


class Project(Base):
    __tablename__ = 'project'

    project = db.Column(db.String(128), nullable=False, unique=True)
    project_description = db.Column(db.Text)
    project_url = db.Column(db.Text, unique=True)
    company = db.Column(db.String(128), nullable=False)
    company_url = db.Column(db.String(128), nullable=False)
    position = db.Column(db.String(256), nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))

    def __init__(self, project, project_description, project_url, company, company_url, position):
        self.project = project
        self.project_description = project_description
        self.project_url = project_url
        self.company = company
        self.company_url = company_url
        self.position = position

    @property
    def serialize(self):
        return {
            'id': self.id,
            'project': self.project,
            'project_description': self.project_description,
            'project_url': self.project_url,
            'company': self.company,
            'position': self.position,
        }


class SocialNetwork(Base):
    __tablename__ = 'social_network'

    social_network_name = db.Column(db.String(256), nullable=False, unique=True)
    social_network_url = db.Column(db.String(256), nullable=False, unique=True)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))

    def __init__(self, social_network_name, social_network_url, person_id):
        self.social_network_name = social_network_name
        self.social_network_url = social_network_url
        self.person_id = person_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'social_name': self.social_name,
            'social_url': self.social_url,
            'person_id': self.person_id,
        }


class Attachment(Base):
    __tablename__ = 'attachment'

    attachment_name = db.Column(db.String(256), nullable=False, unique=True)
    attachment_url = db.Column(db.String(256), nullable=False, unique=True)
    person_id = db.Column(db.Integer, db.ForeignKey('person.id'))

    def __init__(self, attachment_name, attachment_url, person_id):
        self.attachment_name = attachment_name
        self.attachment_url = attachment_url
        self.person_id = person_id

    @property
    def serialize(self):
        return {
            'id': self.id,
            'attachment_name': self.attachment_name,
            'attachment_url': self.attachment_url,
            'person_id': self.person_id,
        }
