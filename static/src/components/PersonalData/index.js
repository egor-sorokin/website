import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../utils/api';
import { URL_PATH_PERSONAL_DATA } from '../../constants/index';


const PersonalData = ({ data, isFetching, error }) => {
  const personData = data.personData || {};

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
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

PersonalData.propTypes = {
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

PersonalData.defaultProps = {
  data: {},
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSONAL_DATA, PersonalData);
