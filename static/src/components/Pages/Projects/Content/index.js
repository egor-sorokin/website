import React from 'react';
import Grid from './Grid'
import './styles.scss';


const Content = ({ data }) => (
  <section>
    <h1 class="title">{data.project}</h1>
    <ContentList></ContentList>
    {data.imgUrl ? (
        <div className="content content--right">
          <div className="image" style={{ backgroundImage: `url(${data.imgUrl})` }} />
        </div>
      ) : (
        <Grid></Grid>
      )}
  </section>
);

export default Content;
