import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="social-links">
            <a
              href="https://github.com/vd152"
              target="_blank"
              className="facebook"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://www.instagram.com/_vidhiangrish_/"
              className="instagram"
              target="_blank"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidhi-angrish/"
              className="linkedin"
              target="_blank"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <div className="copyright">
            <p>Thank you for visiting.</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
