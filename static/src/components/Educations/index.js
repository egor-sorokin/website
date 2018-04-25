import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../utils/api';
import { URL_PATH_EDUCATIONS } from '../../constants/index';


function Educations({ data, isFetching, error }) {
  const educations = data.educations || [];
  const educationComponent = educations.map(item => (
    <div key={item.id}>
      asd
    </div>
  ));

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      {educationComponent}
    </div>
  );
}

Educations.propTypes = {
  data: PropTypes.shape([
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ]),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};


Educations.defaultProps = {
  data: [],
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_EDUCATIONS, Educations);
