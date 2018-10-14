import React from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import OrderedList from '../../OrderedList/index'
import IntroText from '../../IntroText/index'
import Logo from '../../Logo/index';
import {URL_PATH_PERSON_DATA} from '../../../constants/index';
import './styles.scss';


const About = ({data, isFetching, error}) => {
  const personData = data.personData || {};

  if (error) {
    return <div><p>{error}</p></div>;
  }

  if (isFetching) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      <section className="about">
        <div className="about__item about__item--left">
          <div className="line line--top"></div>
          <Logo></Logo>
          <div className="line line--bottom"></div>
        </div>
        <div className="about__item about__item--middle">
          <h1 className="about__title">{personData.first_name + ' ' + personData.last_name}</h1>
          <IntroText
            personData={personData}
          ></IntroText>
          <div class="about__item-footer">
            <OrderedList></OrderedList>
          </div>
        </div>
        <div className="about__item about__item--right">
          <button className="button-close">
            <span className="button-close__text"></span>
          </button>
          <OrderedList></OrderedList>
        </div>

      </section>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    summary: PropTypes.string,
  }),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

About.defaultProps = {
  data: {},
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSON_DATA, About);
