import { FC } from 'react';

const Logo: FC = () => (
  <div className="logo">
    <svg
      className="logo__circles"
      height="100"
      viewBox="-20 -35 150 150"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" stroke="#ddd">
        <circle cx="44" cy="44" fill="#424242" r="43" />
        <ellipse
          className="logo__circle-big"
          cx="54.238"
          cy="29.549"
          fill="#2d2b28"
          rx="25.254"
          ry="25.73"
        />
        <ellipse
          cx="62.429"
          cy="20.385"
          fill="#696969"
          rx="13.651"
          ry="13.746"
        />
        <ellipse
          className="logo__circle-medium"
          cx="58.675"
          cy="69.377"
          fill="#696969"
          rx="13.992"
          ry="14.098"
        />
        <ellipse cx="62.429" cy="73.607" fill="#2d2b28" rx="8.19" ry="8.459" />
        <ellipse
          cx="16.016"
          cy="42.238"
          fill="#696969"
          rx="15.016"
          ry="15.156"
        />
        <ellipse cx="27.619" cy="42.238" rx="26.619" ry="26.434" />
        <ellipse cx="9.19" cy="42.59" fill="#909090" rx="8.19" ry="8.459" />
      </g>
    </svg>
  </div>
);

export default Logo;
