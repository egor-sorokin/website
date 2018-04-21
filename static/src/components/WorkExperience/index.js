import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_WORK_EXPERIENCE } from '../../constants/index';


const WorkExperience = ({ data, isFetching, error }) => {
  const workExperience = data.workExperience || [];

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      {workExperience.map(item =>
        <div key={item.id}>
          asd
        </div>
      )}
    </div>
  );
};

export default withFetching(URL_PATH_WORK_EXPERIENCE, WorkExperience);
