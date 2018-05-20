from testing_config import BaseTestConfig
from app.models import Person
import json
from app.models import Person, Project, SocialNetwork, Attachment
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
            'summary': 'lorem ipsum'
        }

        person = Person(first_name=initial_data['first_name'],
                        last_name=initial_data['last_name'],
                        email=initial_data['email'],
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

    # Test projects endpoint
    def test_get_projects(self):
        initial_data = {
            'project': 'proj',
            'project_description': 'desc',
            'project_url': 'proj-url',
            'company': 'cooompany',
            'company_url': 'cooompany',
            'position': 'pos',
            'person_id': '1',
        }

        project = Project(project=initial_data['project'],
                          project_description=initial_data['project_description'],
                          project_url=initial_data['project_url'],
                          company=initial_data['company'],
                          company_url=initial_data['company_url'],
                          position=initial_data['position'])
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
