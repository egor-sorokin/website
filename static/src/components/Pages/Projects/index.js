import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import Content from '../../Content/index';
import Switcher from '../../Switcher/index';
import {URL_PATH_PROJECTS} from '../../../constants/index';
import './styles.scss';


const Projects = ({data, isFetching, error}) => {
  const projects = data.projects || [];
  const projectsComponent = projects.map(item => (
    <section
      id="projects"
      key={item.id}
      className="slide-inner"
    >
      <div className="container">
        <Content
          name={item.name}
          url={item.url}
          info={item.info}
          image={item.image}
          experiments={item.experiments}
        />
      </div>
      <Switcher
        data={item}
        label="Launch"
        type="black"
      ></Switcher>
    </section>
  ));

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
