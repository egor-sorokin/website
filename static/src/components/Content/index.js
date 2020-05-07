import React from 'react';
import PropTypes from 'prop-types';

import DescriptionList from '../DescriptionList/index';
import ImageGrid from '../ImageGrid/index';
import './styles.scss';


const Content = ({
  name, info, image, showcases, slideName,
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
      {slideName !== 'experiments' ? (
        <img
          className="image"
          title={image.alt}
          alt={image.alt}
          src={image.src}
        />
      ) : (
        <ImageGrid
          gridData={showcases}
        />
      )}
    </div>
  </section>
);

Content.propTypes = {
  slideName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  info: PropTypes.instanceOf(Array),
  showcases: PropTypes.instanceOf(Array),
};

Content.defaultProps = {
  image: {
    alt: '',
    src: '',
  },
  info: [],
  showcases: [],
};

export default Content;
