import React from "react";
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu" />
        </button>
        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <nav className="nav-menu">
            <ul>
              <li className={window.location.pathname === "/" ? "active": ""}>
                <Link to="/">
                  <i className="bx bx-home" /> <span>Home</span>
                </Link>
              </li>
              <li className={window.location.pathname === "/about" ? "active": ""}>
                <Link to="/about">
                  <i className="bx bx-user" /> <span>About</span>
                </Link>
              </li>
              <li className={window.location.pathname === "/resume" ? "active": ""}>
                <Link to="/resume">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </Link>
              </li>
              <li className={window.location.pathname === "/portfolio" ? "active": ""}>
                <Link to="/portfolio">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </Link>
              </li>
              <li className={window.location.pathname === "/contact" ? "active": ""}>
                <Link to="/contact">
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
