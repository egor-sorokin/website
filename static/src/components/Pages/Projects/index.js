import React, {Component} from 'react';
import fetchData from '../../../utils/api';
import Content from '../../Content/index';
import Switcher from '../../Switcher/index';
import {URL_PATH_PROJECTS, SWITCHER_PROJECTS} from '../../../constants/index';
import './styles.scss';


class Projects extends Component {
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
    this.setState({isFetching: true});

    fetchData(URL_PATH_PROJECTS)
      .then(data => this.setState({data, isFetching: false}))
      .catch(error => this.setState({error: error.message, isFetching: false}));
  }


  render() {
    const {data, error, isFetching} = this.state;
    const projects = data.projects || [];

    const projectsComponent = projects.map((project, i) => {
      let id = '';

      if (i === 0) {
        id = 'projects';
      }

      if (i === projects.length - 1) {
        id = 'experiments';
      }

      return (
        <section
          id={id}
          key={project.id}
          className="slide-inner"
        >
          <div className="container">
            <Content
              name={project.name}
              url={project.url}
              info={project.info}
              image={project.image}
              experiments={project.experiments}
            />
          </div>
          <Switcher
            data={project}
            switcherLink={SWITCHER_PROJECTS}
          />
        </section>
      );
    });

    if (error) {
      return <div><p>{error}</p></div>;
    }

    if (isFetching) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <main>
        {projectsComponent}
      </main>
    );
  }
}


export default Projects;
