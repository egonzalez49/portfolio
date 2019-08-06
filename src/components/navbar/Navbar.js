import React from 'react';
import HamburgerMenu from '../../images/hamburger-menu.svg';
import XMark from '../../images/forbidden-mark.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.exit = React.createRef();
    this.nav = React.createRef();
  }

  onMenuClick = e => {
    this.nav.current.classList.toggle('hide-mobile');
    e.preventDefault();
  };

  onExitClick = e => {
    this.nav.current.classList.add('hide-mobile');
    e.preventDefault();
  };

  scrollTo = number => {
    document.getElementsByClassName('header')[number].scrollIntoView();
  };

  scrollToTop = () => {
    document.getElementsByClassName('header-name')[0].scrollIntoView();
  };

  render() {
    return (
      <div className="nav-container">
        <a ref={this.menu} onClick={this.onMenuClick} className="hide-desktop">
          <img className="menu" src={HamburgerMenu} alt="toggle menu" />
        </a>
        <ul ref={this.nav} className="show-desktop hide-mobile">
          <li
            ref={this.exit}
            onClick={this.onExitClick}
            className="exit-btn hide-desktop"
          >
            <img src={XMark} alt="close button" />
          </li>
          <li>
            <a
              onClick={() => {
                this.scrollToTop();
              }}
            >
              top
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.scrollTo(0);
              }}
            >
              about me
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.scrollTo(1);
              }}
            >
              projects
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
