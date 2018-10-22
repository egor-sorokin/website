import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Grid = ({gridData}) => {
  const component = gridData.map(item => (
    <li
      key={item.id}
      className="grid__item item text-c-mercury">
      <a
        href={item.url}
        target="_blank"
        className="image__inner"
        style={{ backgroundImage: `url(${item.image})` }}
      />
    </li>
  ));

  return (
    <ul className="grid">
      {component}
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
