import React from 'react';
import List from './List';
import './styles.scss';


const Content = ({ projectName, info, image }) => (
  <section>
    <h1 className="title">{projectName}</h1>
    <List listData={info} />
    <div className="image">
      <div className="image__inner" title={image.alt} style={{ backgroundImage: `url(${image.src})` }} />
    </div>
  </section>
);

export default Content;
