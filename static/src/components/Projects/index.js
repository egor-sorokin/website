import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../utils/api';
import { URL_PATH_PROJECTS } from '../../constants/index';
import './styles.scss';


const Projects = ({ data, isFetching, error }) => {
  const projects = data.projects || [];
  const projectsComponent = projects.map(item => (
    <section key={item.id} className="slide">
      <div className="line line--left" />
      <div className="container">
        <div className="content content--left">
          <div className="logo">
            <svg className="logo__circles" xmlns="" width="128" height="124" viewBox="0 0 128 124">
              <g fill="none" fillRule="evenodd" stroke="#000" transform="translate(1 1)">
                <ellipse cx="63" cy="61" rx="63" ry="61" />
                <ellipse cx="78" cy="40.5" rx="37" ry="36.5" />
                <ellipse cx="90" cy="27.5" rx="20" ry="19.5" />
                <ellipse cx="84.5" cy="97" rx="20.5" ry="20" />
                <circle cx="90" cy="103" r="12" />
                <ellipse cx="22" cy="58.5" rx="22" ry="21.5" />
                <ellipse cx="39" cy="58.5" rx="39" ry="37.5" />
                <circle cx="12" cy="59" r="12" />
              </g>
            </svg>
          </div>
          <div className="tiles">
            <article className="tile">
              <h1 className="tile__title">{item.project}</h1>
              <div className="tile__text">
                <h6 className="tile__subtitle">Role</h6>
                <div className="tile__link">
                  <p className="">{item.position}</p>
                </div>
              </div>
              <div className="tile__text">
                <h6 className="tile__subtitle">Company</h6>
                <div className="tile__link">
                  <div className="link">
                    <span className="link__placeholder">{item.company}</span>
                    <div className="link__mask">
                      <a className="link__text" href={item.company_url} target="_blank">{item.company}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile__text">
                <h6 className="tile__subtitle">Project URL</h6>
                <div className="tile__link">
                  <div className="link">
                    <span className="link__placeholder">{item.project}</span>
                    <div className="link__mask">
                      <a className="link__text" href={item.project_url} target="_blank">{item.project}</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="tile">
              <h2 className="tile__title">Description</h2>
              <p className="tile__text">{item.project_description}</p>
            </article>
          </div>
        </div>
        <div className="content content--right">
          <div className="image" style={{ backgroundImage: `url(${item.imgUrl})` }} />
        </div>
      </div>
      <div className="line line--right" />
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
