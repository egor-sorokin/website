import React from 'react';
import PropTypes from 'prop-types';

import LinkStretched from '../LinkStretched/index';
import './styles.scss';


const Switcher = ({ url, switcherLink, onClick }) => {
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
  } else if (url) {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-dune"
        text={text}
        onClick={onClick}
        url={url}
        target="_blank"
      />
    );
  }

  return (
    <div className={`switcher switcher--${type}`}>
      { link ? (
        <React.Fragment>
          <div className="switcher__line line line--top" />
          {link}
          <div className="switcher__line line line--bottom" />
        </React.Fragment>
      ) : (
        <div className="switcher__line line line--full" />
      )}
    </div>
  );
};

Switcher.propTypes = {
  onClick: PropTypes.func,
  url: PropTypes.string,
  switcherLink: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
};

Switcher.defaultProps = {
  onClick: () => {
  },
  switcherLink: {},
  url: '',
};

export default Switcher;
