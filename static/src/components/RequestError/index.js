import React from 'react';
import './styles.scss';

const RequestError = () => (
  <div class="request-error">
    <div class="request-error__inner">
      <h3 class="request-error__text text-c-l-dune">
        Something went wrong, please contact
        <a
          href="https://www.linkedin.com/in/egor-sorokin-1b13ba105"
          target="_blank"
          class="request-error__link"
        > administrator</a>
      </h3>
    </div>
  </div>
);

export default RequestError;
