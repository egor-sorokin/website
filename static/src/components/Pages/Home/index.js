import React, {Component} from 'react';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import Button from './Button';
import withFetching from '../../../utils/api';
import {URL_PATH_PERSON_DATA} from '../../../constants/index';
import './styles.scss';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {activeSection: 'Home'};
  }

  scrollToProjects = (section, scrollTo) => {
    this.setState({activeSection: section}, () => {
      if (scrollTo) {
        this.isAnimating = true;
        scrollToY(
          document.getElementById(section).offsetTop,
          500,
          'easeInOutQuint',
          () => {
            this.isAnimating = false;
          }
        );
      }
    });
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
        <section className="banner">
          <div className="line line--left"/>
          <div className="logo">
            <svg className="logo__circles" xmlns="" width="128" height="124" viewBox="0 0 128 124">
              <g fill="none" fillRule="evenodd" stroke="#DDD" transform="translate(1 1)">
                <ellipse cx="63" cy="61" rx="63" ry="61"/>
                <ellipse cx="78" cy="40.5" rx="37" ry="36.5"/>
                <ellipse cx="90" cy="27.5" rx="20" ry="19.5"/>
                <ellipse cx="84.5" cy="97" rx="20.5" ry="20"/>
                <circle cx="90" cy="103" r="12"/>
                <ellipse cx="22" cy="58.5" rx="22" ry="21.5"/>
                <ellipse cx="39" cy="58.5" rx="39" ry="37.5"/>
                <circle cx="12" cy="59" r="12"/>
              </g>
            </svg>
          </div>
          <div className="name">
            <p className="firstname">
              {personData.first_name}
            </p>
            <div className="delimiter"/>
            <p className="lastname">
              {personData.last_name}
            </p>
          </div>
          <Button onClick={this.scrollToProjects}>
            Explore
          </Button>
          <div className="line line--right"/>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
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

Home.defaultProps = {
  data: {},
  error: '',
  isFetching: false,
};


export default withFetching(URL_PATH_PERSON_DATA, Home);
