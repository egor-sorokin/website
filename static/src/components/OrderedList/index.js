import React from 'react';
import PropTypes from 'prop-types';
import LinkMasked from '../LinkMasked/index';
import {LINK_MASKED} from '../../constants/index';
import './styles.scss';


const OrderedList = ({title, items, type}) => {
    const cssClassesLinkMasked = "orderedlist__text";
    const orderedListItems = items.map((item) => {
      if (type === LINK_MASKED) {
        let data = {
          text: item.name,
          link: item.url
        };

        return (
          <li
            key={item.id}
            className="orderedlist__item">
            <div class="orderedlist__item-dash"></div>
            <LinkMasked
              linkData={data}
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
        {title.length > 0 && (<h5 className="orderedlist__title">{title}</h5>)}
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