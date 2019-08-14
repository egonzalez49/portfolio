import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import Logo from '../../images/logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    //this.menu = React.createRef();
    //this.exit = React.createRef();
    this.nav = React.createRef();
    this.hamburger = React.createRef();
  }

  toggleNav = () => {
    this.nav.current.classList.toggle('clip');
    this.hamburger.current.classList.toggle('is-active');
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navbar">
        <a href="logo">
          <img className="logo" src={Logo} alt="personal brand" />
        </a>
        <nav className="nav-list hide-mobile">
          <ul>
            <li>
              <Link to="" onClick={this.scrollToTop}>
                top
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-100}>
                about me
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-100}>
                my projects
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-mobile">
          {/* <img
            onClick={this.toggleNav}
            src={HamburgerMenu}
            alt="hamburger menu"
          /> */}

          <button
            ref={this.hamburger}
            onClick={this.toggleNav}
            className="hamburger hamburger--boring"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          <ul ref={this.nav} className="nav-links">
            <li>
              <Link to="" onClick={this.scrollToTop}>
                top
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-100}>
                about me
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-100}>
                my projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      // <div className="nav-container">
      //   <a ref={this.menu} onClick={this.onMenuClick} className="hide-desktop">
      //     <img className="menu" src={HamburgerMenu} alt="toggle menu" />
      //   </a>
      //   <ul ref={this.nav} className="show-desktop hide-mobile">
      //     <li
      //       ref={this.exit}
      //       onClick={this.onExitClick}
      //       className="exit-btn hide-desktop"
      //     >
      //       <img src={XMark} alt="close button" />
      //     </li>
      //     <li>
      //       <a
      //         onClick={() => {
      //           this.scrollToTop();
      //         }}
      //       >
      //         top
      //       </a>
      //     </li>
      //     <li>
      //       <a
      //         onClick={() => {
      //           this.scrollTo(0);
      //         }}
      //       >
      //         about me
      //       </a>
      //     </li>
      //     <li>
      //       <a
      //         onClick={() => {
      //           this.scrollTo(1);
      //         }}
      //       >
      //         projects
      //       </a>
      //     </li>
      //   </ul>
      // </div>
    );
  }
}

export default Navbar;
