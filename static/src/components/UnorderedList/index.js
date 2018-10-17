import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const UnorderedList = ({title, items}) => {
  const unorderedListItems = items.map((item) => (
    <li key={item.id}
        className="unorderedlist__item">
      <a href={item.url}
         target="_blank"
         className="unorderedlist__text">{item.name}</a>
    </li>
  ));

  return (
    <div className="unorderedlist">
      {title.length > 0 && (<h5 className="unorderedlist__title">{title}</h5>)}
      <ul className="unorderedlist__list">
        {unorderedListItems}
      </ul>
    </div>
  )
};

UnorderedList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array)
};

UnorderedList.defaultProps = {
  title: '',
  items: []
};

export default UnorderedList;
