import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/index';
import UnorderedList from '../../UnorderedList/index';
import Navbar from '../../Navbar/index';
import { NAVBAR_ITEMS, LINK_MASKED } from '../../../constants/index';
import './styles.scss';


const Contact = ({ person }) => {
  const socials = person ? person.socials : [];

  return (
    <div>
      <section className="banner contact">
        <div className="contact-inner">
          <div className="contact-inner__item">
            <Navbar
              items={NAVBAR_ITEMS}
            />
            <div className="delimiter" />
          </div>
          <div className="contact-inner__item">
            <Logo />
          </div>
          <div className="contact-inner__item">
            <UnorderedList
              title=""
              items={socials.items}
              type={LINK_MASKED}
            />
          </div>
        </div>
      </section>
    </div>
  );
};


Contact.propTypes = {
  person: PropTypes.shape({
    socials: PropTypes.shape({}),
  }).isRequired,
};


export default Contact;
