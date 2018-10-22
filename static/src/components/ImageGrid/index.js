import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const ImageGrid = ({gridData}) => {
  const component = gridData.map(item => (
    <li
      key={item.id}
      className="image-grid__item item text-c-mercury">
      <a
        href={item.url}
        target="_blank"
        className="item__image image"
        style={{ backgroundImage: `url(${item.image})` }}
      />
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
