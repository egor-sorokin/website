import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_PROJECTS } from '../../constants/index';


const Projects = ({ data, isFetching, error }) => {
  const projects = data.projects || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isFetching) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      dasd
      <div>
        {projects.map(item =>
          <div key={item.id}>
            asd
          </div>
        )}
      </div>
    </div>
  );
};

export default withFetching(URL_PATH_PROJECTS)(Projects);