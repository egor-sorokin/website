import React, {Component} from 'react';
import PersonalData from './PersonalData';
import WorkExperience from './WorkExperience';

export default class App extends Component {
  render() {
    return (
      <div>
        <PersonalData />
        <WorkExperience />
      </div>
    );
  }
}
