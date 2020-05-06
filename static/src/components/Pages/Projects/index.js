import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../Content/index';
import Switcher from '../../Switcher/index';
import { SWITCHER_PROJECTS } from '../../../constants/index';
import './styles.scss';


const Projects = ({ projects }) => {
  const projectsComponent = projects.map(project => (
    <section
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
  ));

  return (
    <main>
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
