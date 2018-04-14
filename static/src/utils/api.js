import React, { Component } from 'react';
import axios from 'axios';
import { DEFAULT_URL } from '../constants/index'


const withFetching = (url) => (CurrentComponent) =>
    class WithFetching extends Component {
      constructor(props) {
        super(props);

        this.state = {
          data: {},
          isFetching: false,
          error: null
        }
      }

      componentDidMount() {
        this.fetchData();
      }

      fetchData() {
        this.setState({isFetching: true});

        axios(DEFAULT_URL + url)
          .then(response => {
            if (response.status === 200) {
              return response.data;
            } else {
              console.log('else');
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({data, isFetching: false}))
          .catch(error => this.setState({error, isFetching: false}));
      }

      render() {
        return (
          <CurrentComponent {...this.props} {...this.state} />
        )
      }
    };


export default withFetching;
