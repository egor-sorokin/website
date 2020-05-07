import React from 'react';
import PropTypes from 'prop-types';

import DescriptionList from '../DescriptionList/index';
import ImageGrid from '../ImageGrid/index';
import './styles.scss';


const Content = ({
  name, info, image, experiments,
}) => (
  <section className="project">
    <div className="col col--left">
      <h1 className="font-s-40">
        {name}
      </h1>
      <DescriptionList
        listData={info}
      />
    </div>
    <div className="col col--right">
      {experiments.length === 0 ? (
        <img
          className="image"
          title={image.alt}
          alt={image.alt}
          src={image.src}
        />
      ) : (
        <ImageGrid
          gridData={experiments}
        />
      )}
    </div>
  </section>
);

Content.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  info: PropTypes.instanceOf(Array),
  experiments: PropTypes.instanceOf(Array),
};

Content.defaultProps = {
  image: {
    alt: '',
    src: '',
  },
  info: [],
  experiments: [],
};

export default Content;
