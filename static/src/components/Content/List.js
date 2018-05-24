import React from 'react';
import './styles.scss';


const List = ({ data }) => {
  const listComponent = data.map((item) =>
    <li key={item.id} className="item">
    <h6 className="item__title">{item.title}</h6>
      {item.url ? (
        <div className="item__link">
          <div className="link">
            <span className="link__placeholder">{item.text}</span>
            <div className="link__mask">
              <a className="link__text" href={item.url} target="_blank">{item.text}</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="item__plain-text">
          <p className="">{item.text}</p>
        </div>
      )}
  </li>
  );

  return (
    <ul>
      {listComponent}
    </ul>
  );
};

export default List;
