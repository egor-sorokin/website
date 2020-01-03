import React from 'react';
import './styles.scss';


const RequestError = () => (
  <div className="request-error">
    <div className="request-error__inner">
      <h3 className="request-error__text text-c-l-dune">
        Something went wrong, please contact
        <a
          href="https://www.linkedin.com/in/egor-sorokin-1b13ba105"
          target="_blank"
          className="request-error__link"
        > administrator
        </a>
      </h3>
    </div>
  </div>
);

export default RequestError;
