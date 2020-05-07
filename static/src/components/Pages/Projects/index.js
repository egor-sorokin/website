import React from 'react';
import PropTypes from 'prop-types';

import { SWITCHER_PROJECTS } from '../../../constants/index';
import '../../../styles/app/_common.scss';
import './styles.scss';
import Switcher from '../../Switcher';
import DescriptionList from '../../DescriptionList';


const Projects = ({ projects }) => {
  const projectsComponent = projects.map(({
    id, name, info, image, url,
  }) => (
    <section key={id} className="slide-inner">
      <div className="container">
        <section className="content content--projects">
          <div className="col col--left">
            <h1 className="font-s-40">
              {name}
            </h1>
            <DescriptionList
              listData={info}
            />
          </div>
          <div className="col col--right">
            <img
              className="image"
              title={image.alt}
              alt={image.alt}
              src={image.src}
            />
          </div>
        </section>
      </div>
      <Switcher
        url={url}
        switcherLink={SWITCHER_PROJECTS}
      />
    </section>
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
