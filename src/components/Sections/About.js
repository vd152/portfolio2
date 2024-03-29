import React from "react";

class About extends React.Component {
  getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  render() {
    return (
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img
                src="assets/img/picture.png"
                className="img-fluid"
                alt="reload"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Software Developer</h3>
              <p className="mt-4 mb-5">
                I am a Full-Stack Software Developer based in India. <br />
                <br />
                I am currently working in Bank of New York Mellon as a part of
                the platform engineering team. I studied Computer Science
                Engineering and have always had a keen interest in programming
                and development. Since the last 4 years, I've been really crazy
                about web or full stack development and have created various
                projects as well. I have also been greatful enough to have
                worked with some amazing people during my previous internships
                or freelance projects.
                <br />
                <br />I can't stop learning new things; the more, the better.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Email:</strong> vidhi152@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Website:</strong> www.vidhiangrish.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>City:</strong> New Delhi, India
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Age:</strong> {this.getAge("2000-02-15")}
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Degree:</strong> Bachelor of Technology - CSE
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
