import React from 'react';

class About extends React.Component {
    render(){
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
                    <h3> Web Developer &amp; Designer</h3>
                    <p className="mt-4 mb-5">
                      I am a Web Developer based in India. <br />
                      <br />
                      I am currently studying Computer Science Engineering at IP
                      University having just started my 3rd year. I obsess over
                      the minor details in CSS/HTML/JavaScript and I really enjoy
                      solving problems to make things pretty and easy to use.{" "}
                      <br />
                      <br />I can't stop learning new things; the more, the
                      better.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <i className="icofont-rounded-right" />{" "}
                            <strong>Birthday:</strong> 15 Feb 2000
                          </li>
                          <li>
                            <i className="icofont-rounded-right" />{" "}
                            <strong>Website:</strong> www.vidhiangrish.me
                          </li>
                          <li>
                            <i className="icofont-rounded-right" />{" "}
                            <strong>Phone:</strong> +91 9205050225
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
                            <strong>Age:</strong> 20
                          </li>
                          <li>
                            <i className="icofont-rounded-right" />{" "}
                            <strong>Degree:</strong> Bachelor
                          </li>
                          <li>
                            <i className="icofont-rounded-right" />{" "}
                            <strong>Email:</strong> vidhi152@gmail.com
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
        )
    }
}
export default About