import React from 'react';
import PropTypes from 'prop-types';
import LinkStretched from  '../LinkStretched/index'
import './styles.scss';


const Switcher = ({data, switcherLink}) => {
  const cssClassesLinkStretched = "switcher__link font-w-b font-f-sec font-s-10 text-t-u text-c-dune";
  let link = '';

  if (switcherLink.text.toLowerCase() === 'about') {
    link = (
      <LinkStretched
        linkData={switcherLink}
        cssClasses={cssClassesLinkStretched}
      ></LinkStretched>
    );
  } else if (data && data.url) {
    link = (
      <LinkStretched
        linkData={switcherLink}
        cssClasses={cssClassesLinkStretched}
        target="_blank"
      ></LinkStretched>
    );
  }

  return (
    <div className={`switcher switcher--${switcherLink.type}`}>
      <div className="switcher__line line--top"/>
      {link}
      {((data && data.url) || switcherLink.text.toLowerCase() === 'about') && (
        <div className="switcher__line line--bottom"/>)}
    </div>);
};

Switcher.propTypes = {
  data: PropTypes.shape({}),
  switcherLink: PropTypes.shape({}),
};

Switcher.defaultProps = {
  data: {},
  switcherLink: {},
};

export default Switcher;
