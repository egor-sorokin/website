import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const LinkStretched = ({linkData, cssClasses, target}) => {
    console.log(linkData);
  
  return (
    <a
      href={linkData.link}
      target={target}
      className={cssClasses}
    >{linkData.text}</a>
  )
};

LinkStretched.propTypes = {
  linkData: PropTypes.shape({}),
  cssClasses: PropTypes.string,
  target: PropTypes.string
};

LinkStretched.defaultProps = {
  linkData: {},
  cssClasses: '',
  target: ''
};

export default LinkStretched;