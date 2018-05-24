import React from 'react';
import './styles.scss';


const Grid = ({ gridData }) => {
  const gridComponent = gridData.map(item => (
    <li key={item.src} className="item">
      {/* eslint-disable */ }
      <a className="image__inner" href={item.url} style={{ backgroundImage: `url(${item.src})` }} />
      {/* eslint-enable */}
    </li>
  ));

  return (
    <ul>
      {gridComponent}
    </ul>
  );
};


export default Grid;
