import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import ButtonExplore from './ButtonExplore';
import LinkStretched from '../../LinkStretched/index';
import {attachShowAnimation} from './animation';
import {BUTTON_EXPLORE, BUTTON_ABOUT} from '../../../constants/index';
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
    const {data} = this.props;
    const personData = data.personData || {};

    return (
      <div>
        <section
          id="home"
          className="home banner text-c-mercury-light">
          <h3 className="home__name font-s-36">
            {personData.first_name + ' ' + personData.last_name}
          </h3>

          <ButtonExplore
            cssClasses="home__button-explore"
            onClick={this.scrollToProjects}
          >{BUTTON_EXPLORE.text}</ButtonExplore>

          <div className="switcher switcher--white">
            <div className="switcher__line line--top"/>
            <div className="home__button-about">
              <LinkStretched
              onClick={this.clickAboutButton}
              cssClasses="switcher__link font-s-12-secondary text-c-dune"
              text={BUTTON_ABOUT.text}
            ></LinkStretched>
            </div>
            <div className="switcher__line line--bottom"/>
          </div>
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
