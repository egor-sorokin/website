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
  const socials = personData.socials || [];
  const navbarItems = ['Home', 'About', 'Projects', 'Experiments'];

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
          <div className="contact-inner__item">
            <Navbar
              items={navbarItems}
            ></Navbar>
            <div className="delimiter"></div>
          </div>
          <div className="contact-inner__item">
            <Logo></Logo>
          </div>
          <div className="contact-inner__item">
            <UnorderedList
              title=''
              items={socials.items}
            ></UnorderedList>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Contact.defaultProps = {
  data: {},
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSON_DATA, Contact);
