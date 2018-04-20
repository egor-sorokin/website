import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_PROJECTS } from '../../constants/index';


const Projects = ({ data, isFetching, error }) => {
  const projects = data.projects || [];

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      {projects.map(item =>
        <div key={item.id}>
          asd
        </div>
      )}
    </div>
  );
};

export default withFetching(URL_PATH_PROJECTS, Projects);