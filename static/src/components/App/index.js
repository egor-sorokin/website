import React, {Component} from 'react';
import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';
import About from '../Pages/About/index';
import Projects from '../Pages/Projects/index';
import Loader from '../Loader/index';
import RequestError from '../RequestError/index';
import fetchData from '../../utils/api';
import {URL_PATH_PERSON_DATA, URL_PATH_PROJECTS} from '../../constants/index';


class App extends Component {
  constructor() {
    super();

    this.state = {
      personData: {},
      projectsData: {},
      isOpenedAbout: false
    }
  }


  componentDidMount() {
    this._fetchData();
  };


  _fetchData() {
    this.setState({isFetching: true});

    const promisePersonData = fetchData(URL_PATH_PERSON_DATA);
    const promiseProjectsData = fetchData(URL_PATH_PROJECTS);

    Promise.all([promisePersonData, promiseProjectsData])
      .then((results) => {
        this.setState({
          personData: results[0],
          projectsData: results[1]
        })
      })
      .catch(error => this.setState({error: error.message}))
      .finally(() => this.setState({isFetching: false}));
  }


  toggleAboutSection = () => {
    this.setState({isOpenedAbout: !this.state.isOpenedAbout});
  };


  render() {
    if (this.state.error) {
      return <RequestError></RequestError>;
    }

    if (this.state.isFetching) {
      return <Loader></Loader>;
    }

    return (
      <div>
        <About
          isFetching={this.state.isFetching}
          data={this.state.personData}
          isOpenedAbout={this.state.isOpenedAbout}
          toggleAboutSection={this.toggleAboutSection}
        />
        <Home
          isFetching={this.state.isFetching}
          data={this.state.personData}
          toggleAboutSection={this.toggleAboutSection}
        />
        <Projects
          data={this.state.projectsData}
        />
        <Contact
          data={this.state.personData}
          toggleAboutSection={this.toggleAboutSection}
        />
      </div>
    )
  }
}

export default App;
