import React from 'react';
import PersonalData from './../PersonalData/index';
import WorkExperience from './../WorkExperience/index';
import Educations from './../Educations/index';
import Skills from './../Skills/index';
import Projects from './../Projects/index';

const App = () => (
  <div>
    <PersonalData />
    <Projects />
    <WorkExperience />
    <Educations />
    <Skills />
  </div>
);


export default App;
