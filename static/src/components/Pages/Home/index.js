import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import ButtonExplore from './ButtonExplore';
import Switcher from '../../Switcher/index';
import {attachShowAnimation} from './animation';
import {BUTTON_EXPLORE, SWITCHER_ABOUT} from '../../../constants/index';
import './styles.scss';


class Home extends Component {
  constructor(props) {
    super(props);

    this.homeTween = null;
  }


  componentDidMount() {
    if (!this.props.isFetching) {
      this.homeTween = new TimelineMax();
      attachShowAnimation(this.homeTween);
      this.homeTween.play();
    }
  }


  scrollToProjects = (section) => {
    scrollToY(
      document.getElementById(section).offsetTop,
      500,
      'easeInOutQuint'
    );
  };


  clickAboutButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const {data} = this.props;
    const personData = data.personData || {};

    return (
      <div>
        <section
          id="home"
          className="banner home text-c-mercury-light">
          <h3 className="home__name font-s-36">
            {personData.first_name + ' ' + personData.last_name}
          </h3>

          <ButtonExplore
            cssClasses="home__button-explore"
            onClick={this.scrollToProjects}
          >{BUTTON_EXPLORE.text}</ButtonExplore>

          <Switcher
            switcherLink={SWITCHER_ABOUT}
            onClick={this.clickAboutButton}
          ></Switcher>
        </section>
      </div>
    );
  }
}


Home.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.shape({}),
  toggleAboutSection: PropTypes.func
};

Home.defaultProps = {
  isFetching: true,
  data: {},
  toggleAboutSection: () => {
  }
};


export default Home;
