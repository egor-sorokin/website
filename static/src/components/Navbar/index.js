import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Navbar = ({items}) => {
  const navbarItems = items.map((item) => (
    <li className="navbar__item">
      <a href="/" className="navbar__text">{item}</a>
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