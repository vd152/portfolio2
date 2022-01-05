import React from "react";
const textArray = ["Developer", "Designer", "Freelancer"];

class Hero extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

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
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Vidhi Angrish</h1>
          <p>
            I am a <span className="typed">{text}</span>
          </p>
        </div>
      </section>
    );
  }
}
export default Hero;
