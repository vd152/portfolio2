import React from 'react';

export default class Skills extends React.Component {
    render(){
        return (
            <section id="skills" className="skills section-bg" style={{minHeight: "75vh"}}>
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        HTML <i className="val">95%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        CSS <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        JavaScript <i className="val">80%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        React.js <i className="val">70%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        Node.js <i className="val">70%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        MySQL <i className="val">85%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        MongoDB <i className="val">85%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        C/C++<i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                      <a
                        className="percinfo"
                        href="whatever"
                        onClick={() => {
                          return false;
                        }}
                      >
                        What do these % mean?
                      </a>
                    </div>
                    <div className="text-center perc-info no-display">
                      <p>
                        0% -- 0 Year Experience <br /> 100% -- 2 Years Experience{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}