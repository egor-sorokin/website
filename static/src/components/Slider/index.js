import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import './styles.scss';


const FullSlider = ({children}) => {
  let slides = children.map((item, i) => (
    <Slider.Item
      key={i}
      className={`slide slide-${i}`}
    >
      <div className="content">{item}</div>
    </Slider.Item>
  ));

  return (
    <Slider>
      {slides}
    </Slider>
  );
};

FullSlider.propTypes = {
  children: PropTypes.instanceOf(Array),
};

FullSlider.defaultProps = {
  children: [],
};

export default FullSlider;
