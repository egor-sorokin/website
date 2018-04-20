import React, { Component } from 'react';
import withFetching from '../../utils/api';
import { URL_PATH_EDUCATIONS } from '../../constants/index';


const Educations = ({ data, isFetching, error }) => {
  const educations = data.educations || [];

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
        {educations.map(item =>
          <div key={item.id}>
            asd
          </div>
        )}
    </div>
  );
};

export default withFetching(URL_PATH_EDUCATIONS, Educations);
