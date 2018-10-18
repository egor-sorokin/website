import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Grid from './Grid';
import './styles.scss';


const Content = ({name, url, info, image, experiments}) => (
  <section className="project">
    <div className="col col--left">
      <h1 className="font-s-40 font-w-m">
        {name}
      </h1>
      <List
        listData={info}
      />
    </div>
    <div className="col col--right">
      {experiments.length === 0 ? (
        <div className="image">
          image
          <a
            href={url}
            target="_blank"
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
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.shape({}),
  info: PropTypes.instanceOf(Array),
  experiments: PropTypes.instanceOf(Array),
};

Content.defaultProps = {
  name: '',
  url: '',
  image: {},
  info: [],
  experiments: [],
};

export default Content;
