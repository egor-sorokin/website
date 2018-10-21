import React from 'react';
import PropTypes from 'prop-types';
import LinkStretched from '../LinkStretched/index';
import './styles.scss';


const Navbar = ({items}) => {
  const cssClassesLinkStretched = 'navbar__text font-w-b font-f-sec font-s-10 text-t-u text-c-mercury-light';
  const navbarItems = items.map((item, i) => (
    <li
      key={i+1}
      className="navbar__item"
    >
      <LinkStretched
        linkData={item}
        cssClasses={cssClassesLinkStretched}
      ></LinkStretched>
    </li>
  ));

  return (
    <ul className="navbar">
      {navbarItems}
    </ul>
  )
};

Navbar.propTypes = {
  items: PropTypes.instanceOf(Array)
};

Navbar.defaultProps = {
  items: []
};

export default Navbar;