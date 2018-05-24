import React from 'react';
import './styles.scss';


const Grid = ({ data }) => {
  const gridComponent = data.map((item) =>
    <li  key={item.id} className="item">
      <a href={item.url}></a>
    </li>
  );

  return (
    <ul>
      {gridComponent}
    </ul>
  );
};


export default Grid;