import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const ImageGrid = ({ gridData }) => {
  const component = gridData.map(({ id, url, image }, i) => (
    <li
      key={id}
      className="image-grid__item item text-c-mercury"
    >
      {(i === 0 || i === 3) ?
        (
          <div
            className="item__image image"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <a
            href={url}
            target="_blank"
            className="item__image image"
            style={{ backgroundImage: `url(${image})` }}
          />
        )
      }
    </li>
  ));

  return (
    <ul className="image-grid">
      {component}
    </ul>
  );
};

ImageGrid.propTypes = {
  gridData: PropTypes.instanceOf(Array),
};

ImageGrid.defaultProps = {
  gridData: [],
};

export default ImageGrid;
