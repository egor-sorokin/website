import React, {Component} from 'react';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import LinkStretched from '../LinkStretched/index';
import './styles.scss';


class Navbar extends Component {
  scrollToSection = (section) => {
      scrollToY(
        document.getElementById(section).offsetTop,
        500,
        'easeInOutQuint'
      );
  };

  render() {
    const {items} = this.props;
    const cssClassesLinkStretched = 'navbar__text font-s-12-secondary text-c-mercury-light';
    const navbarItems = items.map((item, i) => (
      <li
        key={i+1}
        className="navbar__item"
      >
        <LinkStretched
          cssClasses={cssClassesLinkStretched}
          url={item.url}
          text={item.text}
          onClick={this.scrollToSection}
        ></LinkStretched>
      </li>
    ));

    return (
      <ul className="navbar">
        {navbarItems}
      </ul>
    )
  }
};

Navbar.propTypes = {
  items: PropTypes.instanceOf(Array)
};

Navbar.defaultProps = {
  items: []
};

export default Navbar;