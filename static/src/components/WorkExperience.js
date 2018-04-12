import React, { Component } from 'react';
import { getWorkExperience } from '../utils/api';


export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFetching: false,
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      isFetching: true
    });

    let workExperiencePromise = getWorkExperience();

    workExperiencePromise
      .then(res => {
        this.setState({
          data: res.data.workExperience,
          isFetching: false,
          loaded: true
        });
      })
      .catch(error => {
        console.log(`Error during fetching personal data :::: ${error}`);

        this.setState({
          isFetching: false
        });
      })
  }


  render() {
    const data = this.state.data;

    return (
      <div>
        <section>
          <p>
            {data.id}
          </p>

        </section>
      </div>
    );
  }
}
