import React from 'react';
import PropTypes from 'prop-types';


const ButtonExplore = props => {
  const handleClick = () => {
    props.onClick('projects', true);
  };

  let classNames = `${props.cssClasses} button button--white`;

  return (
    <div className={classNames}>
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

ButtonExplore.propTypes = {
  cssClasses: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};


ButtonExplore.defaultProps = {
  cssClasses: '',
  children: [],
  onClick: () => {
  }
};

export default ButtonExplore;
