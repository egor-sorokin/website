import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineMax} from 'gsap';
import {attachToggleAnimation} from './animation';
import OrderedList from '../../OrderedList/index'
import Summary from '../../Summary/index'
import Logo from '../../Logo/index';
import LinkStretched from '../../LinkStretched/index';
import fetchData from '../../../utils/api';
import {URL_PATH_PERSON_DATA, LINK_MASKED, BUTTON_CLOSE} from '../../../constants/index';
import './styles.scss';


class About extends Component {
  constructor(props) {
    super(props);

    this.aboutSection = React.createRef();
    this.name = React.createRef();

    this.aboutTween = null;
    this.state = {
      data: {},
      isFetching: false,
      error: null,
    };
  }


  componentDidMount() {
    this._fetchData()
      .finally(() => {
        this.aboutTween = new TimelineMax();
        attachToggleAnimation(this.aboutTween);
      });
  }


  componentDidUpdate(prepProps) {
    if (this.props.isOpenedAbout !== prepProps.isOpenedAbout) {
      this.aboutTween.reversed(!this.props.isOpenedAbout);
      // document.body.style.overflowY = (this.props.isOpenedAbout ? 'hidden' : 'initial');
    }
  }


  _fetchData() {
    this.setState({isFetching: true});

    return fetchData(URL_PATH_PERSON_DATA)
      .then(data => this.setState({data, isFetching: false}))
      .catch(error => this.setState({error: error.message, isFetching: false}));
  }


  clickCloseButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const {data, isFetching, error} = this.state;
    const personData = data.personData || {};
    const socials = personData.socials || [];
    const attachments = personData.attachments || [];
    const cssClassesButton = "button-close__link font-s-12-secondary text-c-mercury-light";

    if (error) {
      return <div><p>{error}</p></div>;
    }

    if (isFetching) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div>
        <section ref={this.aboutSection}
                 className="about text-c-mercury-light">
          <div className="about__item about__item--left">
            <div className="line line--top"></div>
            <Logo></Logo>
            <div className="line line--bottom"></div>
          </div>
          <div className="about__item about__item--middle">
            <h1 ref={this.name}
                className="about__title font-s-36"
            >
              {personData.first_name + ' ' + personData.last_name}
            </h1>
            <Summary
              summary={personData.summary}
            ></Summary>
            <div className="about__item-footer">
              <OrderedList
                title={socials.title}
                items={socials.items}
                type={LINK_MASKED}
              ></OrderedList>
            </div>
          </div>
          <div className="about__item about__item--right">
            <OrderedList
              title={attachments.title}
              items={attachments.items}
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
  isOpenedAbout: PropTypes.bool,
  toggleAboutSection: PropTypes.func
};

About.defaultProps = {
  isOpenedAbout: false,
  toggleAboutSection: () => {
  }
};


export default About;
