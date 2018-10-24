import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import Content from '../../Content/index';
import Switcher from '../../Switcher/index';
import {URL_PATH_PROJECTS, SWITCHER_PROJECTS} from '../../../constants/index';
import './styles.scss';


const Projects = ({data, isFetching, error}) => {
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
};

Projects.propTypes = {
  data: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Projects.defaultProps = {
  data: {},
  isFetching: false,
  error: '',
};


export default withFetching(URL_PATH_PROJECTS, Projects);
