import React, { Component } from 'react';
import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';
import About from '../Pages/About/index';
import Projects from '../Pages/Projects/index';
import Loader from '../Loader/index';
import RequestError from '../RequestError/index';
import fetchData from '../../utils/api';
import { URL_PATH_EXPERIMENTS, URL_PATH_PERSON_DATA, URL_PATH_PROJECTS } from '../../constants';
import Experiments from '../Pages/Experiments';


class App extends Component {
  state = {
    person: null,
    projects: [],
    experiments: {},
    isOpenedAbout: false,
    isFetching: true,
    error: null,
  };


  componentDidMount() {
    this._fetchData();
  }


  _fetchData() {
    this.setState({ isFetching: true });

    const promisePersonData = fetchData(URL_PATH_PERSON_DATA);
    const promiseProjects = fetchData(URL_PATH_PROJECTS);
    const promiseExperiments = fetchData(URL_PATH_EXPERIMENTS);

    Promise.all([
      promisePersonData,
      promiseProjects,
      promiseExperiments,
    ])
      .then((results) => {
        this.setState({
          isFetching: false,
          person: results[0].person,
          projects: results[1].projects,
          experiments: results[2].experiments,
        });
      })
      .catch(error => this.setState({ error: error.message, isFetching: false }));
  }


  toggleAboutSection = () => {
    this.setState({ isOpenedAbout: !this.state.isOpenedAbout });
  };


  render() {
    const {
      error,
      isFetching,
      isOpenedAbout,
      person,
      projects,
      experiments,
    } = this.state;

    if (error) {
      return <RequestError />;
    }

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <About
          isFetching={isFetching}
          person={person}
          isOpenedAbout={isOpenedAbout}
          toggleAboutSection={this.toggleAboutSection}
        />
        <Home
          isFetching={isFetching}
          person={person}
          toggleAboutSection={this.toggleAboutSection}
        />
        <Projects
          projects={projects}
        />
        <Experiments
          experiments={experiments}
        />
        <Contact
          person={person}
          toggleAboutSection={this.toggleAboutSection}
        />
      </React.Fragment>
    );
  }
}

export default App;
