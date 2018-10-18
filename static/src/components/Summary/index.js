import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Summary = ({summary}) => {
  const summaryItems = summary.map((item, i) => (
    <li
      key={i+1}
      className="summary__item"
    >
      <h3 className="summary__title">{item.title}</h3>
      <p className="summary__text">{item.text}</p>
    </li>
  ));

  return (
    <ul className="summary">
      {summaryItems}
    </ul>
  )
};

Summary.propTypes = {
  summary: PropTypes.instanceOf(Array),
};

Summary.defaultProps = {
  summary: [],
};


export default Summary;