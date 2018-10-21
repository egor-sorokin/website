import React, {Component} from 'react';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import Button from './Button';
import Switcher from '../../Switcher/index';
import withFetching from '../../../utils/api';
import {URL_PATH_PERSON_DATA, SWITCHER_HOME} from '../../../constants/index';
import './styles.scss';


class Home extends Component {
  scrollToProjects = (section, scrollTo) => {
    if (scrollTo) {
      scrollToY(
        document.getElementById(section).offsetTop,
        500,
        'easeInOutQuint'
      );
    }
  };

  render() {
    const {data, isFetching, error} = this.props;
    const personData = data.personData || {};

    if (error) {
      return <div><p>{error}</p></div>;
    }

    if (isFetching) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div>
        <section className="home banner text-c-mercury-light">
          <h3 className="home__name font-s-36">
            {personData.first_name + ' ' + personData.last_name}
          </h3>
          <Button onClick={this.scrollToProjects}>
            Explore
          </Button>
          <Switcher
            switcherLink={SWITCHER_HOME}
          ></Switcher>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

Home.defaultProps = {
  data: {},
  isFetching: false,
  error: '',
};


export default withFetching(URL_PATH_PERSON_DATA, Home);
