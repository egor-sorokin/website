import React, { Component } from 'react';
import withFetching from '../utils/api';
import { URL_PATH_EDUCATION } from '../constants/index';


const Educations = ({ data, isFetching, error }) => {
  const educations = data.educations || [];

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
        {educations.map(item =>
          <div key={item.id}>
            asd
          </div>
        )}
      </div>
    </div>
  );
};

export default withFetching(URL_PATH_EDUCATION)(Educations);