import React, {Component} from 'react';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import ButtonExplore from './ButtonExplore';
import LinkStretched from '../../LinkStretched/index';
import fetchData from '../../../utils/api';
import {URL_PATH_PERSON_DATA, BUTTON_EXPLORE, BUTTON_ABOUT} from '../../../constants/index';
import './styles.scss';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isFetching: false,
      error: null,
    };
  }


  componentDidMount() {
    this._fetchData();
  }


  _fetchData() {
    this.setState({isFetching: true});

    fetchData(URL_PATH_PERSON_DATA)
      .then(data => this.setState({data, isFetching: false}))
      .catch(error => this.setState({error: error.message, isFetching: false}));
  }


  scrollToProjects = (section, scrollTo) => {
    if (scrollTo) {
      scrollToY(
        document.getElementById(section).offsetTop,
        500,
        'easeInOutQuint'
      );
    }
  };


  clickAboutButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const {data, isFetching, error} = this.state;
    const personData = data.personData || {};

    if (error) {
      return <div><p>{error}</p></div>;
    }

    if (isFetching) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div>
        <section id="home" className="home banner text-c-mercury-light">
          <h3 className="home__name font-s-36">
            {personData.first_name + ' ' + personData.last_name}
          </h3>

          <ButtonExplore
            onClick={this.scrollToProjects}
          >{BUTTON_EXPLORE.text}</ButtonExplore>

          <div className="switcher switcher--white">
            <div className="switcher__line line--top"/>
            <LinkStretched
              onClick={this.clickAboutButton}
              cssClasses="switcher__link font-s-12-secondary text-c-dune"
              text={BUTTON_ABOUT.text}
            ></LinkStretched>
            <div className="switcher__line line--bottom"/>
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  toggleAboutSection: PropTypes.func
};

Home.defaultProps = {
  toggleAboutSection: () => {
  }
};


export default Home;
