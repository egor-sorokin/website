import React from 'react';
import GridItem from './GridItem';
import './styles.scss';


const Grid = ({ data }) => {
  const gridComponent = data.map((item) =>
    <GridItem key={item.id}></GridItem>
  );

  return (
    <ul>
      {gridComponent}
    </ul>
  );
};


export default Grid;