import React, {Component} from 'react';
import PersonalData from './../PersonalData/index';
import WorkExperience from './../WorkExperience/index';
import Educations from './../Educations/index';
import Skills from './../Skills/index';
import Projects from './../Projects/index';

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
