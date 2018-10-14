import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
  const handleClick = () => {
    props.onClick(props.index + 1, true);
  };

  return (
    <div className="button button--white">
      <a
        href={`#slide-${props.index + 1}`}
        className="button__link"
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
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Button;
