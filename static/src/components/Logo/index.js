import React from 'react';
import './styles.scss';


const Logo = () => (
  <div className="logo">
    <svg className="logo__circles" xmlns="" width="128" height="124" viewBox="0 0 128 124">
      <g fill="none" fillRule="evenodd" stroke="#000" transform="translate(1 1)">
        <ellipse cx="63" cy="61" rx="63" ry="61" />
        <ellipse cx="78" cy="40.5" rx="37" ry="36.5" />
        <ellipse cx="90" cy="27.5" rx="20" ry="19.5" />
        <ellipse cx="84.5" cy="97" rx="20.5" ry="20" />
        <circle cx="90" cy="103" r="12" />
        <ellipse cx="22" cy="58.5" rx="22" ry="21.5" />
        <ellipse cx="39" cy="58.5" rx="39" ry="37.5" />
        <circle cx="12" cy="59" r="12" />
      </g>
    </svg>
  </div>
);

export default Logo;
