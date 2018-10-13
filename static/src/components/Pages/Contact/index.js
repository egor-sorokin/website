import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import { URL_PATH_PERSON_DATA } from '../../../constants/index';
import './styles.scss';


const Contact = ({ data, isFetching, error }) => {
  const personData = data.personData || {};

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      <section className="banner">
        {personData.id}
      </section>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    personData: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      summary: PropTypes.string,
    }),
  }),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Contact.defaultProps = {
  data: {
    personData: {},
  },
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSON_DATA, Contact);
