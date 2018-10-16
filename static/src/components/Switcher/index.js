import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Switcher = ({type, label, data}) => {
  let link = '';

  if (label.toLowerCase() === 'about') {
    link = (<a
      href="/"
      className="switcher__link font-w-b font-f-sec font-s-10 text-t-u text-c-dune"
    >{label}</a>);
  } else if (data && data.project_url) {
    link = (<a
      href={data.project_url}
      target="_blank"
      className="switcher__link font-w-b font-f-sec font-s-10 text-t-u text-c-dune"
    >{label}</a>);
  }

  return (
    <div className={`switcher switcher--${type}`}>
      <div className="switcher__line line--top"/>
      {link}
      {((data && data.project_url) || label.toLowerCase() === 'about') && (
        <div className="switcher__line line--bottom"/>)}
    </div>);
};

Switcher.propTypes = {
  data: PropTypes.shape({}),
  type: PropTypes.string,
  label: PropTypes.string,
};

Switcher.defaultProps = {
  data: {},
  type: '',
  label: '',
};

export default Switcher;
