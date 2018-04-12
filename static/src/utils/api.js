import axios from 'axios';


export function getPersonalData() {
  return axios.get(`http://127.0.0.1:8080/api/v.1.0/person`);
}


export function getWorkExperience() {
  return axios.get(`http://127.0.0.1:8080/api/v.1.0/work_experience`);
}
