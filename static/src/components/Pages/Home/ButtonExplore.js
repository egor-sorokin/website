import React from 'react';
import PropTypes from 'prop-types';


const ButtonExplore = ({ cssClasses, onClick, children }) => {
  const handleClick = () => {
    onClick('projects', true);
  };

  const classNames = `${cssClasses} button button--white`;

  return (
    <div className={classNames}>
      <a
        href="#projects"
        className="button__link font-s-12"
        onClick={handleClick}
      >
        {children}
      </a>
    </div>
  );
};

ButtonExplore.propTypes = {
  cssClasses: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};


ButtonExplore.defaultProps = {
  cssClasses: '',
  children: [],
  onClick: () => {
  },
};

export default ButtonExplore;
