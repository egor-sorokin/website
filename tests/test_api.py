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
    def test_get_person(self):
        initial_data = {
            'first_name': 'Eg',
            'last_name': 'Sor',
            'email': 'example@example.com',
            'phone': '123456',
            'summary': 'lorem ipsum'
        }

        person = Person(first_name=initial_data['first_name'],
                        last_name=initial_data['last_name'],
                        email=initial_data['email'],
                        phone=initial_data['phone'],
                        summary=initial_data['summary'])

        db.session.add(person)
        db.session.commit()
        response = self.app.get('/api/v.1.0/person')
        result = json.loads(response.data).get('personData')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(cmp(result, initial_data))

    def test_request_from_empty_person_table(self):
        db.session.query(Person).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/person')
        self.assertEqual(response.status_code, 404)

    # Test work experience endpoint
    def test_get_work_experience(self):
        initial_data = {
            'company': 'cooompany',
            'position': 'pos',
            'date': 'daaate',
            'location': 'location',
            'person_id': '1'
        }

        work_experience = WorkExperience(company=initial_data['company'],
                                         position=initial_data['position'],
                                         date=initial_data['date'],
                                         location=initial_data['location'],
                                         person_id=initial_data['person_id'])
        db.session.add(work_experience)
        db.session.commit()
        response = self.app.get('/api/v.1.0/work_experience')
        result = json.loads(response.data).get('workExperience')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(cmp(result, initial_data))

    def test_request_from_empty_work_experience_table(self):
        db.session.query(WorkExperience).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/work_experience')
        self.assertEqual(response.status_code, 404)

    # Test projects endpoint
    def test_get_projects(self):
        initial_data = {
            'project': 'proj',
            'project_description': 'desc',
            'project_url': 'proj-url',
            'work_experience_id': '1',
        }

        project = Project(project=initial_data['project'],
                          project_description=initial_data['project_description'],
                          project_url=initial_data['project_url'],
                          work_experience_id=initial_data['work_experience_id'])
        db.session.add(project)
        db.session.commit()
        response = self.app.get('/api/v.1.0/projects')
        result = json.loads(response.data).get('projects')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(cmp(result, initial_data))

    def test_request_from_empty_projects_table(self):
        db.session.query(Project).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/projects')
        self.assertEqual(response.status_code, 404)

    # Test skills endpoint
    def test_get_skills(self):
        initial_data = {
            'category': 'cat',
            'skills': 'ski',
            'person_id': '1',
        }

        skill = Skill(category=initial_data['category'],
                      skills=initial_data['skills'],
                      person_id=initial_data['person_id'])
        db.session.add(skill)
        db.session.commit()
        response = self.app.get('/api/v.1.0/skills')
        result = json.loads(response.data).get('skills')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(cmp(result, initial_data))

    def test_request_from_empty_skills_table(self):
        db.session.query(Skill).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/skills')
        self.assertEqual(response.status_code, 404)

    # Test educations endpoint
    def test_get_educations_route(self):
        initial_data = {
            'place': 'place',
            'degree': 'degreedd',
            'date': 'date',
            'location': 'location',
            'person_id': '1',
        }

        education = Education(place=initial_data['place'],
                              degree=initial_data['degree'],
                              date=initial_data['date'],
                              location=initial_data['location'],
                              person_id=initial_data['person_id'])
        db.session.add(education)
        db.session.commit()
        response = self.app.get('/api/v.1.0/educations')
        result = json.loads(response.data).get('educations')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(cmp(result, initial_data))

    def test_request_from_empty_educations_table(self):
        db.session.query(Education).delete()
        db.session.commit()
        response = self.app.get('/api/v.1.0/educations')
        self.assertEqual(response.status_code, 404)
