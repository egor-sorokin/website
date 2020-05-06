import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';
import Switcher from '../Switcher';


const InnerSlide = ({
  url,
  name,
  info,
  image,
  switcherLink,
  showcases,
}) => (
  <section className="slide-inner">
    <div className="container">
      <Content
        name={name}
        info={info}
        image={image}
        experiments={showcases}
      />
    </div>
    <Switcher
      url={url}
      switcherLink={switcherLink}
    />
  </section>
);


InnerSlide.propTypes = {
  name: PropTypes.string.isRequired,
  switcherLink: PropTypes.shape({}),
  info: PropTypes.instanceOf(Array),
  showcases: PropTypes.instanceOf(Array),
  image: PropTypes.shape({}),
  url: PropTypes.string,
};

InnerSlide.defaultProps = {
  showcases: [],
  image: {},
  url: '',
  switcherLink: {},
  info: [],
};


export default InnerSlide;
