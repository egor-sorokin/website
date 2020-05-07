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
  slideName,
}) => (
  <section className="slide-inner">
    <div className="container">
      <Content
        slideName={slideName}
        name={name}
        info={info}
        image={image}
        showcases={showcases}
      />
    </div>
    <Switcher
      url={url}
      switcherLink={switcherLink}
    />
  </section>
);


InnerSlide.propTypes = {
  slideName: PropTypes.string.isRequired,
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
