import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_SKILLS } from '../../constants/index';


const Skills = ({ data, isFetching, error }) => {
  const skills = data.skills || [];

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      {skills.map(item =>
        <div key={item.id}>
          asd
        </div>
      )}
    </div>
  );
};

export default withFetching(URL_PATH_SKILLS, Skills);
