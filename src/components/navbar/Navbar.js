import React from 'react';
import HamburgerMenu from '../../images/hamburger-menu.svg';

const Navbar = () => {
  return (
    <div className="nav-container">
      <a href="#" className="hide-desktop">
        <img className="menu" src={HamburgerMenu} alt="toggle menu" />
      </a>
      <ul className="show-desktop hide-mobile">
        <li>
          <a href="#">top</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
