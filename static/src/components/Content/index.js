import React from 'react';
import List from './List';
import './styles.scss';


const Content = ({ projectName, info, image }) => (
  <div className="project">
    <section className="col col--left">
      <h1 className="font-s-48 font-w-m">
        {projectName}
      </h1>
      <List listData={info} />
    </section>
    <div className="col col--right">
      <div className="image">
        image
        <div
          className="image__inner"
          title={image.alt}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      </div>
    </div>
  </div>
);

export default Content;
