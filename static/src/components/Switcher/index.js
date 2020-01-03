import React from 'react';
import PropTypes from 'prop-types';
import LinkStretched from '../LinkStretched/index';
import './styles.scss';


const Switcher = ({ data, switcherLink, onClick }) => {
  let link;
  const { type, text } = switcherLink;

  if (text && text.toLowerCase() === 'about') {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-mercury-light"
        text={text}
        onClick={onClick}
      />
    );
  } else if ((data && data.url)) {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-dune"
        text={text}
        onClick={onClick}
        url={data.url}
        target="_blank"
      />
    );
  }

  return (
    <div className={`switcher switcher--${type}`}>
      <div className="switcher__line line--top" />
      {link}
      {(link) && (<div className="switcher__line line--bottom" />)}
    </div>);
};

Switcher.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.shape({
    url: PropTypes.string,
  }),
  switcherLink: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
};

Switcher.defaultProps = {
  onClick: () => {
  },
  data: {},
  switcherLink: {},
};

export default Switcher;
