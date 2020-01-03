import React from 'react';
import PropTypes from 'prop-types';
import LinkMasked from '../LinkMasked/index';
import { LINK_MASKED } from '../../constants/index';
import './styles.scss';


const UnorderedList = ({ title, items, type }) => {
  const cssClassesLinkMasked = 'unorderedlist__text font-s-18 text-c-mercury-light';
  const unorderedListItems = items.map((item) => {
    if (type === LINK_MASKED) {
      return (
        <li
          key={item.id}
          className="unorderedlist__item"
        >
          <LinkMasked
            linkData={item}
            cssClasses={cssClassesLinkMasked}
            target="_blank"
          />
        </li>
      );
    }

    return (
      <li
        key={item.id}
        className="unorderedlist__item"
      >
        <a
          href={item.url}
          target="_blank"
          className="unorderedlist__text"
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <div className="unorderedlist">
      {title.length > 0 && (<h5 className="unorderedlist__title">{title}</h5>)}
      <ul className="unorderedlist__list">
        {unorderedListItems}
      </ul>
    </div>
  );
};

UnorderedList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array),
  type: PropTypes.string,
};

UnorderedList.defaultProps = {
  title: '',
  items: [],
  type: '',
};

export default UnorderedList;
