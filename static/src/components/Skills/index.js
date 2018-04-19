import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_SKILLS } from '../../constants/index';


const Skills = ({ data, isFetching, error }) => {
  const skills = data.skills || [];

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
        {skills.map(item =>
          <div key={item.id}>
            asd
          </div>
        )}
      </div>
    </div>
  );
};

export default withFetching(URL_PATH_SKILLS, Skills);