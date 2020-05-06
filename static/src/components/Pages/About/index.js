import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

import { attachToggleAnimation } from './animation';
import OrderedList from '../../OrderedList/index';
import Summary from '../../Summary/index';
import Logo from '../../Logo/index';
import LinkStretched from '../../LinkStretched/index';
import { LINK_MASKED, BUTTON_CLOSE } from '../../../constants/index';
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
    const { isOpenedAbout } = this.props;

    if (isOpenedAbout !== prepProps.isOpenedAbout) {
      this.aboutTween.reversed(!isOpenedAbout);
      document.body.style.overflowY = (isOpenedAbout ? 'hidden' : 'initial');
    }
  }


  clickCloseButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const { person } = this.props;
    const socials = person.socials || [];
    const cssClassesButton = 'button-close__link font-s-12-secondary text-c-mercury-light';

    return (
      <section className="about text-c-mercury-light">
        <div className="about__item item item--left">
          <div className="item__line item__line--top" />
          <Logo />
          <div className="item__line item__line--bottom" />
        </div>
        <div className="about__item item item--middle">
          <h1 className="item__title font-s-36">
            {`${person.first_name} ${person.last_name}`}
          </h1>
          <Summary
            summary={person.summary}
          />
        </div>
        <div className="about__item item item--right">
          <OrderedList
            title={socials.title}
            items={socials.items}
            type={LINK_MASKED}
          />
        </div>
        <div className="button-close">
          <LinkStretched
            onClick={this.clickCloseButton}
            cssClasses={cssClassesButton}
            text={BUTTON_CLOSE.text}
          />
        </div>
      </section>
    );
  }
}


About.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    socials: PropTypes.shape({}),
    summary: PropTypes.instanceOf(Array),
  }).isRequired,
  isOpenedAbout: PropTypes.bool.isRequired,
  toggleAboutSection: PropTypes.func,
};

About.defaultProps = {
  toggleAboutSection: () => {
  },
};


export default About;
