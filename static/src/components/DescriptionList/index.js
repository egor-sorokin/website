import React from 'react';
import PropTypes from 'prop-types';

import LinkMasked from '../LinkMasked/index';
import './styles.scss';


const DescriptionList = ({ listData }) => {
  const cssClassesLinkMasked = 'link-masked--white font-f-sec font-s-20 text-c-l-dune';
  let component;

  if (typeof listData === 'string') {
    component = (
      <li
        key={1 + listData}
        className="description-list__item item"
      >
        <p
          className="item__plain-text font-f-sec font-s-20 text-c-l-dune"
          dangerouslySetInnerHTML={{ __html: listData }}
        />
      </li>
    );
  } else {
    component = (listData || []).map((item, i) => (
      <li
        key={i + 1}
        className="description-list__item item"
      >
        <h6 className="item__title font-s-12-secondary">
          {item.label}
        </h6>
        {item.url ? (
          <div className="item__link">
            <LinkMasked
              linkData={item}
              cssClasses={cssClassesLinkMasked}
              target="_blank"
            />
          </div>
        ) : (
          <p className="item__plain-text font-f-sec font-s-20 text-c-l-dune">{item.text}</p>
        )}
      </li>
    ));
  }

  return (
    <ul className="description-list">
      {component}
    </ul>
  );
};

DescriptionList.propTypes = {
  listData: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.string]),
};

DescriptionList.defaultProps = {
  listData: [],
};

export default DescriptionList;
