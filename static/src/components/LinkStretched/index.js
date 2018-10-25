import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const LinkStretched = props => {
  const {text, url, target, cssClasses, onClick} = props;

  const handleClick = (e) => {
    if (!url) {
      e.preventDefault();
      onClick();
    } else {
      onClick(e.currentTarget.dataset.anchorId.substring(1), true);
    }
  };

  return (
    <a
      href={url}
      data-anchor-id={url}
      target={target}
      onClick={handleClick}
      className={'link-stretched ' + cssClasses}
    >{text}</a>
  )
};


LinkStretched.propTypes = {
  onClick: PropTypes.func,
  cssClasses: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  target: PropTypes.string
};

LinkStretched.defaultProps = {
  cssClasses: '',
  text: '',
  url: '',
  target: '',
  onClick: () => {
  }
};


export default LinkStretched;