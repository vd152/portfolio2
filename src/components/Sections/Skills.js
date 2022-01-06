import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default class Skills extends React.Component {
  state = {
    skills: [
      {
        name: "C/C++",
        percent: 85,
      },
      {
        name: "HTML",
        percent: 100,
      },
      {
        name: "NODE.JS",
        percent: 90,
      },
      {
        name: "CSS",
        percent: 90,
      },
      {
        name: "MONGODB",
        percent: 85,
      },
      {
        name: "JAVASCRIPT",
        percent: 80,
      },
      {
        name: "MYSQL",
        percent: 70,
      },
      {
        name: "REACT.JS",
        percent: 85,
      },

    ],
  };
  render() {
    return (
      <section
        id="skills"
        className="skills section-bg"
        style={{ minHeight: "75vh" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            {this.state.skills.map((skill,key)=>{
              return  <div className="col-lg-6" key={key}>
              <div className="progress">
                <span className="skill">
                  {skill.name} <i className="val">{skill.percent}%</i>
                </span>
                <ProgressBar
                  completed={skill.percent}
                  barContainerClassName="progress-bar-wrap"
                />
              </div>
            </div>
            })}     
            <div className="col-12">
              {/* <div className="text-center">
                      <a
                        className="percinfo"
                        href="whatever"
                        onClick={() => {
                          return false;
                        }}
                      >
                        What do these % mean?
                      </a>
                    </div> */}
              <div className="text-center perc-info">
                <p>% -- proficiency over 2 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
