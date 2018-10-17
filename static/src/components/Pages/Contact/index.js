import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/index';
import UnorderedList from '../../UnorderedList/index';
import Navbar from '../../Navbar/index';
import withFetching from '../../../utils/api';
import {URL_PATH_PERSON_DATA} from '../../../constants/index';
import './styles.scss';


const Contact = ({data, isFetching, error}) => {
  const personData = data.personData || {};
  console.log(personData);

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      <section className="banner contact">
        <div className="contact-inner">
          <div class="contact-inner__item">
            <Navbar
              items={['Home', 'About', 'Projects', 'Experiments']}
            ></Navbar>
            <div className="delimiter"></div>
          </div>
          <div class="contact-inner__item">
            <Logo></Logo>
          </div>
          <div class="contact-inner__item">
            <UnorderedList
              items={['Github', 'CodePen', 'Heroku', 'LinkedIn', 'Xing']}
            ></UnorderedList>
          </div>
        </div>
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
