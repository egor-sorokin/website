import React from 'react';
import Grid from './Grid';
import List from './List';
import './styles.scss';


const Content = ({ data }) => (
  <section>
    <h1 class="title">{data.project}</h1>
    <List></List>
    {data.imgUrl ? (
        <div className="image">
          <div className="image__inner" style={{ backgroundImage: `url(${data.imgUrl})` }} />
        </div>
      ) : (
        <Grid></Grid>
      )}
  </section>
);

export default Content;
