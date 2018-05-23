import React from 'react';
import './styles.scss';


const GridItem = ({ url }) => 
  <li className="item">
    <a href={url}></a>
  </li>;

export default GridItem;
