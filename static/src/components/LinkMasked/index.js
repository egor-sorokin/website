import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const LinkStretched = ({ linkData, cssClasses, target }) => (
  <div className="link-masked">
    <span className={`link-masked__placeholder ${cssClasses}`}>{linkData.text}</span>
    <div className="link-masked__mask">
      <a
        href={linkData.url}
        target={target}
        className={`link-masked__text ${cssClasses}`}
      >
        {linkData.text}
      </a>
    </div>
  </div>
);

LinkStretched.propTypes = {
  linkData: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  cssClasses: PropTypes.string,
  target: PropTypes.string,
};

LinkStretched.defaultProps = {
  linkData: {
    url: '',
    text: '',
  },
  cssClasses: '',
  target: '',
};

export default LinkStretched;
