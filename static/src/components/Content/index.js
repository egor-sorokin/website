import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Grid from './Grid';
import './styles.scss';


const Content = ({
  projectName, info, image, experiments,
}) => (
  <section className="project">
    <div className="col col--left">
      <h1 className="font-s-48 font-w-m">
        {projectName}
      </h1>
      <List listData={info} />
    </div>
    <div className="col col--right">
      {experiments.length === 0 ? (
        <div className="image">
          image
          <div
            className="image__inner"
            title={image.alt}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        </div>
      ) : (
        <Grid
          gridData={experiments}
        />
      )}
    </div>
  </section>
);

Content.propTypes = {
  projectName: PropTypes.string,
  info: PropTypes.instanceOf(Array),
  image: PropTypes.shape({}),
  experiments: PropTypes.instanceOf(Array),
};

Content.defaultProps = {
  projectName: '',
  info: [],
  image: {},
  experiments: [],
};

export default Content;
