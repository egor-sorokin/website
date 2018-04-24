from testing_config import BaseTestConfig
from app.models import Person
import json
from app.models import Person, WorkExperience, Project, Skill, Education
from app import db


class TestAPI(BaseTestConfig):
    # Test root endpoint
    def test_get_spa_from_index(self):
        result = self.app.get('/')
        self.assertIn('<!DOCTYPE html>', result.data.decode("utf-8"))

    # Test redirect for all nonexistent pages
    def test_redirect_for_not_found_data(self):
        response = self.app.get('/page-not-found123')
        self.assertEqual(response.status_code, 404)

    # Test person endpoint
    def test_get_person_route(self):
        person = Person(first_name='Eg',
                        last_name='Sor',
                        email='example@example.com',
                        phone='123456',
                        summary='lorem ipsum')
        db.session.add(person)
        db.session.commit()
        response = self.app.get('/api/v.1.0/person')
        self.assertEqual(response.status_code, 200)

    def test_request_from_empty_person_table(self):
        db.session.query(Person).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/person')
        self.assertEqual(response.status_code, 404)

    # Test work experience endpoint
    def test_get_work_experience_route(self):
        work_experience = WorkExperience(company='Hand',
                                         position='Developer',
                                         date='11.02.11-12.02.13',
                                         location='Whenever',
                                         person_id='1')
        db.session.add(work_experience)
        db.session.commit()
        response = self.app.get('/api/v.1.0/work_experience')
        self.assertEqual(response.status_code, 200)

    def test_request_from_empty_work_experience_table(self):
        db.session.query(WorkExperience).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/work_experience')
        self.assertEqual(response.status_code, 404)

    # Test projects endpoint
    def test_get_projects_route(self):
        projects = Project(project='OlaOla',
                           project_description='Lorem',
                           project_url='www.example.com',
                           work_experience_id='1')
        db.session.add(projects)
        db.session.commit()
        response = self.app.get('/api/v.1.0/projects')
        self.assertEqual(response.status_code, 200)

    def test_request_from_empty_projects_table(self):
        db.session.query(Project).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/projects')
        self.assertEqual(response.status_code, 404)

    # Test skills endpoint
    def test_get_skills_route(self):
        skills = Skill(category='Soft',
                       skills='lorem ipsum, ipsum lorem',
                       person_id='1')
        db.session.add(skills)
        db.session.commit()
        response = self.app.get('/api/v.1.0/skills')
        self.assertEqual(response.status_code, 200)

    def test_request_from_empty_skills_table(self):
        db.session.query(Skill).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/skills')
        self.assertEqual(response.status_code, 404)

    # Test educations endpoint
    def test_get_educations_route(self):
        educations = Education(place='Plaaace!',
                               degree='Degreee',
                               date='12-12-12',
                               location='Lorem',
                               person_id='1')
        db.session.add(educations)
        db.session.commit()
        response = self.app.get('/api/v.1.0/educations')
        self.assertEqual(response.status_code, 200)

    def test_request_from_empty_educations_table(self):
        db.session.query(Education).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/educations')
        self.assertEqual(response.status_code, 404)
