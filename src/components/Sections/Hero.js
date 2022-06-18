import React from "react";
import { withRouter } from "react-router-dom";
import About from './About'
import Resume from './Resume';
import Contact from './Contact';
import Skills from './Skills';

const textArray = ["Developer", "Designer", "Freelancer"];

class Hero extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
    // window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (e) => {
    const el = e.target.documentElement;
    const bottom =
      Math.floor(el.scrollHeight - el.scrollTop) ===
      Math.floor(el.clientHeight) - 1;
    if (bottom) {
      this.props.history.push("/about");
    }
  };

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let text = textArray[this.state.textIdx % textArray.length];

    return (
      <React.Fragment>
        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
        >
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Vidhi Angrish</h1>
            <p>
              I am a <span className="typed">{text}</span>
            </p>
          </div>
        </section>
        <About />
        <Skills />
        <Resume />
        <Contact />
      </React.Fragment>
    );
  }
}
export default withRouter(Hero);
