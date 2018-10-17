import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const List = ({listData}) => {
  const component = listData.map((item, i) => (
    <li
      key={i+1}
      className="list__item item">
      <h6 className="item__title font-f-sec font-s-10 font-w-b text-t-u">
        {item.label}
      </h6>
      {item.url ? (
        <div className="item__link">
          <div className="link-tr">
            <span className="link-tr__placeholder font-s-20 font-w-m text-c-l-dune">{item.text}</span>
            <div className="link-tr__mask">
              <a
                href={item.url}
                target="_blank"
                className="link-tr__text font-s-20 font-w-m text-c-l-dune"
              >
                {item.text}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p className="item__plain-text font-s-20 font-w-m text-c-l-dune">
          {item.text}
        </p>
      )}
    </li>
  ));

  return (
    <ul className="list">
      {component}
    </ul>
  );
};

List.propTypes = {
  listData: PropTypes.instanceOf(Array),
};

List.defaultProps = {
  listData: [],
};

export default List;
