import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../utils/api';
import { URL_PATH_WORK_EXPERIENCE } from '../../constants/index';


const WorkExperience = ({ data, isFetching, error }) => {
  const workExperience = data.workExperience || [];
  const workExperienceComponent = workExperience.map(item => (
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
      {workExperienceComponent}
    </div>
  );
};

WorkExperience.propTypes = {
  data: PropTypes.shape([
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ]),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

WorkExperience.defaultProps = {
  data: [],
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_WORK_EXPERIENCE, WorkExperience);
