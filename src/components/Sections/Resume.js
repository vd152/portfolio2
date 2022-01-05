import React from "react";

export default class Resume extends React.Component {
    render(){
        return(
            <section id="resume" className="resume">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Resume</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                      <h4>BTech in Computer Science</h4>
                      <h5>2018 - present</h5>
                      <p>
                        <em>
                          Guru Gobind Singh Indraprastha University, New Delhi
                        </em>
                      </p>
                      <p></p>
                      <ul>
                        <li>Maharaja Surajmal Institute of Technology (MSIT)</li>
                        <li>CGPA: 8.6 (Cumulative till third semester)</li>
                        <li> Percentage: 80.83%</li>
                      </ul>
                      <p />
                    </div>
                    <div className="resume-item">
                      <h4>Class 12, Senior Secondary School Examination</h4>
                      <h5>2017 - 2018</h5>
                      <p>
                        <em>CBSE, New Delhi</em>
                      </p>
                      <p></p>
                      <ul>
                        <li>Modern Convent School</li>
                        <li>Percentage: 94.6% </li>
                      </ul>
                      <p />
                    </div>
                    <div className="resume-item">
                      <h4>Class 10, Secondary School Examination</h4>
                      <h5>2015 - 2016</h5>
                      <p>
                        <em>CBSE, New Delhi</em>
                      </p>
                      <p></p>
                      <ul>
                        <li>Modern Convent School</li>
                        <li>CGPA: 9.6</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="resume-title"> Work Experience</h3>
                    <div className="resume-item">
                      <h4>Front End Development Intern</h4>
                      <h5>June 2020</h5>
                      <p>
                        <em>Viral Again</em>
                      </p>
                      <ul>
                        <li>Revamped the existing company website.</li>
                        <li>
                          Designed and developed a portfolio website for the
                          owner.{" "}
                        </li>
                        <li>
                          {" "}
                          Utilized HTML, CSS, JavaScript and Bootstrap for
                          designing.
                        </li>
                        <li>
                          Collaborated with back-end developer to implement and
                          improve features.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Web Development Intern</h4>
                      <h5>May 2020 – June 2020</h5>
                      <p>
                        <em>Ecera System</em>
                      </p>
                      <ul>
                        <li>Website development for company website.</li>
                        <li>
                          Utilized HTML, CSS, JavaScript and PHP for designing and
                          development.
                        </li>
                        <li>
                          Worked on different client’s projects using WordPress.
                        </li>
                        <li>Built an e-commerce website.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="resume-title">Projects</h3>
                    {/* <div class="resume-item">
          <h4>Senior graphic design specialist</h4>
          <h5>2019 - Present</h5>
          <p><em>Experion, New York, NY </em></p>
          <ul>
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          </ul>
        </div> */}
                    <div className="resume-item">
                      <h4>ENVA - College Festival 2020</h4>
                      <h5>Dec 2019 – Jan 2020</h5>
                      <p>
                        <em>MSIT, New Delhi</em>
                      </p>
                      <ul>
                        <li>Front-end website development for college fest. </li>
                        <li>Utilized HTML, CSS and JavaScript for designing.</li>
                        <li>
                          Designed five pages for the website using Bootstrap.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <h3 className="resume-title">
                      Download Resume -{" "}
                      <a
                        href="assets/img/Vidhi_Angrish_Resume.pdf"
                        target="_blank"
                        download="VidhiAngrish_Resume.pdf"
                      >
                        click here
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}