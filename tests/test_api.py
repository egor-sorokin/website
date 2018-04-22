from testing_config import BaseTestConfig
from app.models import Person
import json


class TestAPI(BaseTestConfig):
    def test_get_spa_from_index(self):
        result = self.app.get('/')
        self.assertIn('<!DOCTYPE html>', result.data.decode("utf-8"))

    def test_get_person_route(self):
        response = self.app.get('/api/v.1.0/person')
        self.assertEqual(response.status_code, 200)

    def test_get_work_experience_route(self):
        response = self.app.get('/api/v.1.0/work_experience')
        self.assertEqual(response.status_code, 200)

    def test_get_projects_route(self):
        response = self.app.get('/api/v.1.0/projects')
        self.assertEqual(response.status_code, 200)

    def test_get_skills_route(self):
        response = self.app.get('/api/v.1.0/skills')
        self.assertEqual(response.status_code, 200)

    def test_get_educations_route(self):
        response = self.app.get('/api/v.1.0/educations')
        self.assertEqual(response.status_code, 200)
