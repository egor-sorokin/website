import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_WORK_EXPERIENCE } from '../../constants/index';


const WorkExperience = ({ data, isFetching, error }) => {
  const workExperience = data.workExperience || [];

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
        {workExperience.map(item =>
          <div key={item.id}>
            asd
          </div>
        )}
      </div>
    </div>
  );
};

export default withFetching(URL_PATH_WORK_EXPERIENCE, WorkExperience);
