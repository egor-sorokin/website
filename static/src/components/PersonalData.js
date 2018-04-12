import React, { Component } from 'react';
import { getPersonalData } from '../utils/api';


export default class PersonalData extends Component {
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

    let personalDataPromise = getPersonalData();

    personalDataPromise
      .then(res => {
        this.setState({
          data: res.data.personData,
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
          <p>
            {data.first_name}
          </p>
          <p>
            {data.last_name}
          </p>
          <p>
            {data.email}
          </p>
          <p>
            {data.summary}
          </p>
        </section>
      </div>
    );
  }
}
