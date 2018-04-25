import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../utils/api';
import { URL_PATH_SKILLS } from '../../constants/index';


const Skills = ({ data, isFetching, error }) => {
  const skills = data.skills || [];
  const skillsComponent = skills.map(item => (
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
      {skillsComponent}
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.shape([
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ]),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Skills.defaultProps = {
  data: [],
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_SKILLS, Skills);
