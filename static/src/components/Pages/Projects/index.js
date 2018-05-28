import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import Content from '../../Content/index';
import { URL_PATH_PROJECTS } from '../../../constants/index';
import './styles.scss';


const Projects = ({ data, isFetching, error }) => {
  const projects = data.projects || [];
  const projectsComponent = projects.map(item => (
    <section key={item.id} className="slide">
      <div className="container">
        <Content
          projectName={item.project}
          info={item.info}
          image={item.image}
          experiments={item.experiments}
        />
      </div>

      <div className="switcher">
        <div className="switcher__line line--top" />
        {item.project_url && (
          <a
            href={item.project_url}
            target="_blank"
            className="switcher__link font-w-b font-f-sec font-s-10 text-t-u text-c-dune"
          >
              Launch
          </a>
        )}
        {item.project_url && (
          <div className="switcher__line line--bottom" />
        )}
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
    <main>
      {projectsComponent}
    </main>
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
