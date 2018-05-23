import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import { URL_PATH_PERSONAL_DATA } from '../../../constants/index';
import './styles.scss';


const About = ({ data, isFetching, error }) => {
  const personalData = data.personalData || {};

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      <section className="banner" />
    </div>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    summary: PropTypes.string,
  }),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

About.defaultProps = {
  data: {},
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSONAL_DATA, About);
