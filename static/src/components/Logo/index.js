import React from 'react';
import './styles.scss';


const Logo = () => (
  <div className="logo">
    <svg className="logo__circles" height="87" viewBox="0 0 88 87" width="88">
      <filter id="a" height="107.2%" width="104.7%" x="-2.3%" y="-2.4%">
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feColorMatrix in="shadowOffsetOuter1" result="shadowMatrixOuter1"
                       values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <g fill="none" fillRule="evenodd" filter="url(#a)" stroke="#ddd" transform="translate(1 1)">
        <ellipse cx="43" cy="41.5" fill="#424242" rx="43" ry="41.5"/>
        <ellipse cx="53.238" cy="27.553" fill="#2d2b28" rx="25.254" ry="24.832"/>
        <ellipse cx="61.429" cy="18.709" fill="#696969" rx="13.651" ry="13.266"/>
        <ellipse cx="57.675" cy="65.992" fill="#696969" rx="13.992" ry="13.607"/>
        <ellipse cx="61.429" cy="70.074" fill="#2d2b28" rx="8.19" ry="8.164"/>
        <ellipse cx="15.016" cy="39.799" fill="#696969" rx="15.016" ry="14.627"/>
        <ellipse cx="26.619" cy="39.799" rx="26.619" ry="25.512"/>
        <ellipse cx="8.19" cy="40.139" fill="#909090" rx="8.19" ry="8.164"/>
      </g>
    </svg>
  </div>
);

export default Logo;
