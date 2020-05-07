import React from 'react';
import PropTypes from 'prop-types';

import { SWITCHER_PROJECTS } from '../../../constants/index';
import './styles.scss';
import InnerSlide from '../../InnerSlide';


const Projects = ({ projects }) => {
  const projectsComponent = projects.map(({
    id, name, info, image, url,
  }) => (
    <InnerSlide
      key={id}
      slideName="projects"
      name={name}
      info={info}
      image={image}
      url={url}
      switcherLink={SWITCHER_PROJECTS}
    />
  ));

  return (
    <main id="projects">
      {projectsComponent}
    </main>
  );
};


Projects.propTypes = {
  projects: PropTypes.instanceOf(Array),
};

Projects.defaultProps = {
  projects: [],
};


export default Projects;
