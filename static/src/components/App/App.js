import React, {Component} from 'react';
import PersonalData from './../PersonalData';
import WorkExperience from './../WorkExperience';
import Educations from './../Educations/Educations';
import Skills from './../Skills';
import Projects from './../Projects';

export default class App extends Component {
  render() {
    return (
      <div>
        <PersonalData />
        <WorkExperience />
        <Educations />
        <Projects />
        <Skills />
      </div>
    );
  }
}
