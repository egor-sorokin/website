import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const LinkStretched = ({
  text, url, target, cssClasses, onClick,
}) => {
  const handleClick = (event) => {
    if (!url) {
      event.preventDefault();
      onClick();
    } else {
      onClick(event.currentTarget.dataset.anchorId.substring(1), true);
    }
  };

  return (
    <a
      href={url}
      data-anchor-id={url}
      target={target}
      onClick={handleClick}
      className={`${cssClasses} link-stretched`}
    >{text}
    </a>
  );
};


LinkStretched.propTypes = {
  onClick: PropTypes.func,
  cssClasses: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  target: PropTypes.string,
};

LinkStretched.defaultProps = {
  cssClasses: '',
  text: '',
  url: '',
  target: '',
  onClick: () => {
  },
};


export default LinkStretched;
