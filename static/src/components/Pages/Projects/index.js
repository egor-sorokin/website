import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../Content/index';
import Switcher from '../../Switcher/index';
import { SWITCHER_PROJECTS } from '../../../constants/index';
import './styles.scss';


const Projects = ({ data }) => {
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

  return (
    <main>
      {projectsComponent}
    </main>
  );
};


Projects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({}),
  }),
};

Projects.defaultProps = {
  data: {
    projects: {},
  },
};


export default Projects;
