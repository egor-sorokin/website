import React from 'react';
import PropTypes from 'prop-types';
import LinkStretched from  '../LinkStretched/index'
import './styles.scss';


const Switcher = ({data, switcherLink}) => {
  const cssClassesLinkStretched = "switcher__link font-s-12-secondary text-c-dune";
  let link;

  if (data && data.url) {
    link = (
      <LinkStretched
        cssClasses={cssClassesLinkStretched}
        text={switcherLink.text}
        url={data.url}
        target="_blank"
      ></LinkStretched>
    );
  }

  return (
    <div className={`switcher switcher--${switcherLink.type}`}>
      <div className="switcher__line line--top"/>
      {link}
      {(link || switcherLink.text.toLowerCase() === 'about') && (
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
