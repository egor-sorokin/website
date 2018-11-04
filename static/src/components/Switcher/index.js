import React from 'react';
import PropTypes from 'prop-types';
import LinkStretched from  '../LinkStretched/index'
import './styles.scss';


const Switcher = ({data, switcherLink, onClick}) => {
  let link;
  let {type, text} = switcherLink;

  if (text && text.toLowerCase() === 'about') {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-mercury-light"
        text={text}
        onClick={onClick}
      ></LinkStretched>
    );
  } else if ((data && data.url)) {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-dune"
        text={text}
        onClick={onClick}
        url={data.url}
        target="_blank"
      ></LinkStretched>
    );
  }

  return (
    <div className={`switcher switcher--${type}`}>
      <div className="switcher__line line--top"/>
      {link}
      {(link) && (<div className="switcher__line line--bottom"/>)}
    </div>);
};

Switcher.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.shape({}),
  switcherLink: PropTypes.shape({}),
};

Switcher.defaultProps = {
  onClick: () => {
  },
  data: {},
  switcherLink: {},
};

export default Switcher;
