import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import Content from './Content/index';
import Grid from './Grid/index';
import { URL_PATH_PROJECTS } from '../../../constants/index';
import './styles.scss';


const Projects = ({ data, isFetching, error }) => {
  const projects = data.projects || [];
  const projectsComponent = projects.map(item => (
    <section key={item.id} className="slide">
      <a href="/">MENU</a>
      <div className="container">
          <Content></Content>
          <Grid></Grid>
      </div>
    </section>
  ));

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      {projectsComponent}
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.shape([
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ]),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Projects.defaultProps = {
  data: [],
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PROJECTS, Projects);
