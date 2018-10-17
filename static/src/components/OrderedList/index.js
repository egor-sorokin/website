import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const OrderedList = ({title, items}) => {
  const orderedListItems = items.map((item) => (
    <li
      key={item.id}
      className="orderedlist__item">
      <a
        href={item.url}
        target="_blank"
        className="orderedlist__text"
      >{item.name}</a>
    </li>
  ));

  return (
    <div className="orderedlist">
      {title.length > 0 && (<h5 className="orderedlist__title">{title}</h5>)}
      <ol className="orderedlist__list">
        {orderedListItems}
      </ol>
    </div>
  )
};

OrderedList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array)
};

OrderedList.defaultProps = {
  title: '',
  items: []
};

export default OrderedList;