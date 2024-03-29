import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

class Skills extends React.Component {
  state = {
    skills: [
      {
        name: "C/C++",
        percent: 85,
        icon: "bx bxl-c-plus-plus",
      },
      // {
      //   name: "C#",
      //   percent: 85,
      //   icon: "icon-c-sharp",
      // },
      // {
      //   name: "Java",
      //   percent: 85,
      //   icon: "fa-brands fa-java",
      // },
      {
        name: "GOLANG",
        percent: 85,
        icon: "fa-brands fa-golang",
      },
      {
        name: "JAVASCRIPT",
        percent: 80,
        icon: "bx bxl-javascript",
      },
      {
        name: "NODE.JS",
        percent: 90,
        icon: "bx bxl-nodejs",
      },
      {
        name: "REACT.JS",
        percent: 85,
        icon: "bx bxl-react",
      },
      {
        name: "HTML",
        percent: 100,
        icon: "bx bxl-html5",
      },
      {
        name: "CSS",
        percent: 90,
        icon: "bx bxl-css3",
      },
      {
        name: "MONGODB",
        percent: 85,
        icon: "bx bxl-mongodb",
      },
      {
        name: "MYSQL",
        percent: 70,
        icon: "icofont-file-sql",
      },
      {
        name: "GraphQL",
        percent: 70,
        icon: "bx bxl-graphql",
      },
      {
        name: "Docker",
        percent: 70,
        icon: "bx bxl-docker",
      },
      {
        name: "Kubernetes",
        percent: 70,
        icon: "bx bxl-kubernetes",
      },
    ],
  };
  render() {
    return (
      <section
        id="skills"
        className="skills section-bg"
        style={{ minHeight: "85vh" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          {/* <div className="row skills-content">
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
          
          </div> */}
          <div className="row">
            {this.state.skills.map((skill, key) => {
              return (
                <div
                  key={key}
                  className="col-lg-2 col-md-3 col-4 d-flex align-items-stretch aos-init aos-animate p-0"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600">
                        <path
                          stroke="none"
                          strokeWidth="0"
                          fill="#2db16d"
                          d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                        ></path>
                      </svg>
                      <i className={skill?.icon}></i>
                    </div>
                    <p className="text-center skill-text">{skill.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
