import React, { Component } from 'react';
import withFetching from '../utils/api';
import { URL_PATH_PERSONAL_DATA } from '../constants/index';


const PersonalData = ({ data, isFetching, error}) => {
  const personData = data.personData || {};

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isFetching) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <section>
        <p>
          {personData.id}
        </p>
        <p>
          {personData.first_name}
        </p>
        <p>
          {personData.last_name}
        </p>
        <p>
          {personData.email}
        </p>
        <p>
          {personData.summary}
        </p>
      </section>
    </div>
  );
};

export default withFetching(URL_PATH_PERSONAL_DATA)(PersonalData);
