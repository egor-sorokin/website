import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
  const handleClick = () => {
    props.onClick('projects', true);
  };

  return (
    <div className="button button--white">
      <a
        href="#projects"
        className="button__link font-s-12"
        onClick={handleClick}
      >
        {props.children}
      </a>
    </div>
  );
};

Button.defaultProps = {
  children: [],
  onClick: () => {
  }
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

export default Button;
