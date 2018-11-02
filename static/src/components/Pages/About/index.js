import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineMax} from 'gsap';
import {attachToggleAnimation} from './animation';
import OrderedList from '../../OrderedList/index'
import Summary from '../../Summary/index'
import Logo from '../../Logo/index';
import LinkStretched from '../../LinkStretched/index';
import {LINK_MASKED, BUTTON_CLOSE} from '../../../constants/index';
import './styles.scss';


class About extends Component {
  constructor(props) {
    super(props);

    this.aboutTween = null;
  }


  componentDidMount() {
    if (!this.props.isFetching) {
      this.aboutTween = new TimelineMax();
      attachToggleAnimation(this.aboutTween);
    }
  }


  componentDidUpdate(prepProps) {
    if (this.props.isOpenedAbout !== prepProps.isOpenedAbout) {
      this.aboutTween.reversed(!this.props.isOpenedAbout);
      document.body.style.overflowY = (this.props.isOpenedAbout ? 'hidden' : 'initial');
    }
  }


  clickCloseButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const {data} = this.props;
    const personData = data.personData || {};
    const socials = personData.socials || [];
    const cssClassesButton = "button-close__link font-s-12-secondary text-c-mercury-light";

    return (
      <div>
        <section className="about text-c-mercury-light">
          <div className="about__item about__item--left">
            <div className="line line--top"></div>
            <Logo></Logo>
            <div className="line line--bottom"></div>
          </div>
          <div className="about__item about__item--middle">
            <h1 className="about__title font-s-36"
            >
              {personData.first_name + ' ' + personData.last_name}
            </h1>
            <Summary
              summary={personData.summary}
            ></Summary>
          </div>
          <div className="about__item about__item--right">
            <OrderedList
              title={socials.title}
              items={socials.items}
              type={LINK_MASKED}
            ></OrderedList>
          </div>
          <div className="button-close">
            <LinkStretched
              onClick={this.clickCloseButton}
              cssClasses={cssClassesButton}
              text={BUTTON_CLOSE.text}
            ></LinkStretched>
          </div>
        </section>
      </div>
    );
  }
}


About.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.shape({}),
  isOpenedAbout: PropTypes.bool,
  toggleAboutSection: PropTypes.func
};

About.defaultProps = {
  data: {},
  isFetching: true,
  isOpenedAbout: false,
  toggleAboutSection: () => {
  }
};


export default About;
