import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withFetching from '../../../utils/api';
import OrderedList from '../../OrderedList/index'
import Summary from '../../Summary/index'
import Logo from '../../Logo/index';
import LinkStretched from '../../LinkStretched/index';
import {URL_PATH_PERSON_DATA, LINK_MASKED, BUTTON_CLOSE} from '../../../constants/index';
import './styles.scss';


class About extends Component {
  clickCloseButton = () => {
    this.props.toggleAboutSection();
  };

  render() {
    const {data, isFetching, error, isOpenedAbout} = this.props;

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
        <section className={'about text-c-mercury-light ' + (isOpenedAbout ? 'visible' : 'hidden')}>
          <div className="about__item about__item--left">
            <div className="line line--top"></div>
            <Logo></Logo>
            <div className="line line--bottom"></div>
          </div>
          <div className="about__item about__item--middle">
            <h1 className="about__title font-s-36">{personData.first_name + ' ' + personData.last_name}</h1>
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
  data: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  isOpenedAbout: PropTypes.bool,
  error: PropTypes.string,
  toggleAboutSection: PropTypes.func
};

About.defaultProps = {
  data: {},
  isFetching: false,
  isOpenedAbout: false,
  error: '',
  toggleAboutSection: () => {
  }
};


export default withFetching(URL_PATH_PERSON_DATA, About);
