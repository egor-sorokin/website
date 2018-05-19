import React, { Component } from 'react';
import axios from 'axios';
// import { DEFAULT_API_URL } from '../constants/index';


const withFetching = (url, CurrentComponent) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isFetching: false,
        error: null,
      };
    }

    componentDidMount() {
      this._fetchData();
    }

    _fetchData() {
      this.setState({ isFetching: true });
      // mock data for frontend
      const mockDataUrl = `http://localhost:8080/src/utils/data/${url}.json`;

      // axios.get(DEFAULT_API_URL + url)
      axios.get(mockDataUrl)
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isFetching: false }))
        .catch(error => this.setState({ error: error.message, isFetching: false }));
    }

    render() {
      return (
        <CurrentComponent {...this.props} {...this.state} />
      );
    }
  };


export default withFetching;
