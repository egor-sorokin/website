import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const UnorderedList = ({items}) => {
  const unorderedListItems = items.map((item) => (
    <li className="unorderedlist__item">
      <a href="/" className="unorderedlist__text">{item}</a>
    </li>
  ));

  return (
    <ul className="unorderedlist">
      {unorderedListItems}
    </ul>
  )
};

UnorderedList.propTypes = {
  items: PropTypes.instanceOf(Array)
};

UnorderedList.defaultProps = {
  items: []
};

export default UnorderedList;
