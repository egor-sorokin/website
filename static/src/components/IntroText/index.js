import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const IntroText = ({personData}) => {
  const descriptionItems = ['2', '3'].map(() => (
    <li className="introtext__item">
      <h3 className="introtext__title">Title</h3>
      <p className="introtext__text">{personData.summary}</p>
      <p className="introtext__text">{personData.summary}</p>
    </li>
  ));

  return (
    <ul className="introtext">
      {descriptionItems}
    </ul>
  )
};

IntroText.propTypes = {
  personData: PropTypes.shape({}),
};

IntroText.defaultProps = {
  personData: [],
};


export default IntroText;