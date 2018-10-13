import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Grid = ({ gridData }) => {
  const gridComponent = gridData.map(item => (
    <li key={item.id} className="grid__item item">
      {/* eslint-disable */ }
      <a className="image__inner"
         href={item.url}
         style={{ backgroundImage: `url(${item.src})` }}/>
      {/* eslint-enable */}
    </li>
  ));

  return (
    <ul className="grid">
      {gridComponent}
    </ul>
  );
};

Grid.propTypes = {
  gridData: PropTypes.instanceOf(Array),
};

Grid.defaultProps = {
  gridData: [],
};

export default Grid;
