import React from 'react';
import PropTypes from 'prop-types';
import LinkMasked from '../LinkMasked/index';
import {LINK_MASKED} from '../../constants/index';
import './styles.scss';


const OrderedList = ({title, items, type}) => {
  const cssClassesLinkMasked = "orderedlist__text font-s-18 text-c-mercury-light";
  const orderedListItems = items.map((item) => {
    if (type === LINK_MASKED) {
      return (
        <li
          key={item.id}
          className="orderedlist__item">
          <div className="orderedlist__item-dash"></div>
          <LinkMasked
            linkData={item}
            cssClasses={cssClassesLinkMasked}
            target="_blank"
          ></LinkMasked>
        </li>
      )
    }

    return (
      <li
        key={item.id}
        className="orderedlist__item">
        <div class="orderedlist__item-dash"></div>
        <a
          href={item.url}
          target="_blank"
          className="orderedlist__text"
        >{item.name}</a>
      </li>
    )
  });

  return (
    <div className="orderedlist">
      {title.length > 0 && (<h5 className="orderedlist__title font-s-12-secondary">{title}</h5>)}
      <ol className="orderedlist__list">
        {orderedListItems}
      </ol>
    </div>
  )
};

OrderedList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array),
  type: PropTypes.string
};

OrderedList.defaultProps = {
  title: '',
  items: [],
  type: ''
};

export default OrderedList;