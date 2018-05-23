import React from 'react';
import ListItem from './ListItem';
import './styles.scss';


const List = ({ data }) => {
  const listComponent = data.map((item) =>
    <ListItem key={item.id}></ListItem>
  );

  return (
    <ul>
      {listComponent}
    </ul>
  );
};

export default List;
