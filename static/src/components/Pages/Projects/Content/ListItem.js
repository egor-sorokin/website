import React from 'react';
import './styles.scss';


const ListItem = ({ title, text, url }) => 
  <li className="item">
    <h6 className="item__title">{title}</h6>
      {url ? (
        <div className="item__link">
          <div className="link">
            <span className="link__placeholder">{text}</span>
            <div className="link__mask">
              <a className="link__text" href={url} target="_blank">{text}</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="item__plain-text">
          <p className="">{text}</p>
        </div>
      )}
  </li>;

export default ListItem;
