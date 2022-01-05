import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  onClick = () => {
    document.querySelector("body").classList.remove("mobile-nav-active");
    document
      .querySelector(".mobile-nav-toggle i")
      .classList.remove("icofont-close");
    document
      .querySelector(".mobile-nav-toggle i")
      .classList.add("icofont-navigation-menu");
  };
  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="mobile-nav-toggle d-xl-none"
          onClick={(e) => {
            document.querySelector("body").classList.add("mobile-nav-active");
            document
              .querySelector(".mobile-nav-toggle i")
              .classList.add("icofont-close");
            document
              .querySelector(".mobile-nav-toggle i")
              .classList.remove("icofont-navigation-menu");
          }}
        >
          <i className="icofont-navigation-menu" />
        </button>
        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <nav className="nav-menu">
            <ul>
              <li
                className={window.location.pathname === "/" ? "active" : ""}
                onClick={this.onClick}
              >
                <Link to="/">
                  <i className="bx bx-home" /> <span>Home</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/about" ? "active" : ""
                }
                onClick={this.onClick}
              >
                <Link to="/about">
                  <i className="bx bx-user" /> <span>About</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/skills" ? "active" : ""
                }
                onClick={this.onClick}
              >
                <Link to="/skills">
                  <i className="bx bx-pen" /> <span>Skills</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/resume" ? "active" : ""
                }
                onClick={this.onClick}
              >
                <Link to="/resume">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/portfolio" ? "active" : ""
                }
                onClick={this.onClick}
              >
                <Link to="/portfolio">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/contact" ? "active" : ""
                }
                onClick={this.onClick}
              >
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
