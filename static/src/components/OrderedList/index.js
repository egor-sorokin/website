import React from 'react';
import './styles.scss';


const OrderedList = () => {
  const orderedListItems = ['LinkedIn', 'Xing', 'GitHub', 'Codepen'].map((item) => (
    <li className="orderedlist__item">
      <a href="/" className="orderedlist__text">{item}</a>
    </li>
  ));

  return (
    <div className="orderedlist">
      <h5 className="orderedlist__title">Attachments</h5>
      <ol className="orderedlist__list" start="1">
        {orderedListItems}
      </ol>
    </div>
  )
};


export default OrderedList;