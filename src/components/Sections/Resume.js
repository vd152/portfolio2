import React from "react";

export default class Resume extends React.Component {
  state = {
    education: [
      {
        title: "BTech in Computer Science",
        timeline: "2018 - present",
        subtitle:
          "Maharaja Surajmal Institute of Technology, GGSIPU, New Delhi",
        points: [
          "CGPA: 9.18 (Cumulative till sixth semester)",
          "Percentage: 85.95%",
        ],
      },
      {
        title: "Class 12, Senior Secondary School Examination",
        timeline: "2017 - 2018",
        subtitle: "CBSE, New Delhi",
        points: ["Modern Convent School", "Percentage: 94.6%"],
      },
      {
        title: "Class 10, Secondary School Examination",
        timeline: "2015 - 2016",
        subtitle: "CBSE, New Delhi",
        points: ["Modern Convent School", "CGPA: 9.6"],
      },
    ],
    work: [
      {
        title: "Software Engineering Intern",
        timeline: "June 2021 - July 2021",
        subtitle: "IHS Markit",
        points: [
          "Worked with AutomotiveMastermind, business unit of IHS Markit",
          "Contributed to the development of the sales product using C#, .NET and MongoDB.",
          "Created unit and integration tests using xUnit",
        ],
      },
      {
        title: "Front End Development Intern",
        timeline: "June 2020",
        subtitle: "Viral Again",
        points: [
          "Revamped the existing company website.",
          "Designed and developed a portfolio website for the owner.",
          "Utilized HTML, CSS, JavaScript and Bootstrap for designing.",
          "Collaborated with back-end developer to implement and improve features.",
        ],
      },
      {
        title: "Web Development Intern",
        timeline: "May 2020 - June 2020",
        subtitle: "Ecera System",
        points: [
          "Website development for company website.",
          "Utilized HTML, CSS, JavaScript and PHP for designing and development.",
          "Worked on different client’s projects using WordPress.",
          "Built an e-commerce website.",
        ],
      },
    ],
    projects: [
      {
        title: "CMS - Freelance Project",
        subtitle: "MERN Stack",
        points: [
          "An E-Commerce System with admin panel for managing user roles, products, sales, coupons, orders, taxes and much more. Also includes features such as setting different layouts for the storefront, tracking sales and analytics, etc.",
        ],
      },
      {
        title: "Aurtistic",
        subtitle: "Node.js, Express.js, Firebase, EJS",
        points: [
          "A place for people to share stories about their experiences with Autism or with Autistic people.",
          "Implementation of threads of stories with likes & comments to build a wide network and spread awareness about ASD to the world.",
        ],
      },
      {
        title: "Raunakh - Donation Portal",
        subtitle: "Node.js, Express.js, MongoDB, EJS, Socket.io, Bootstrap",
        points: [
          "Real-time data updation for donation stats with data retrieval from MongoDB.",
          "Razorpay integration for collecting donations",
        ],
      },
      {
        title: "Bullet Escape",
        subtitle: "C++, Graphics",
        points: [
          "Five leveled, single player, 2-D Game developed using C++ Graphics.",
        ],
      },
    ],
  };
  render() {
    return (
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h3 className="resume-title">Education</h3>
              {this.state.education.map((item, key) => {
                return (
                  <div className="resume-item" key={key}>
                    <h4>{item.title}</h4>
                    <h5>{item.timeline}</h5>
                    <p>
                      <em>{item.subtitle}</em>
                    </p>
                    <p></p>
                    <ul>
                      {item.points.map((point, i) => {
                        return <li key={i}>{point}</li>;
                      })}
                    </ul>
                    <p />
                  </div>
                );
              })}
            </div>
            <div className="col-lg-4">
              <h3 className="resume-title"> Work Experience</h3>
              {this.state.work.map((item, key) => {
                return (
                  <div className="resume-item" key={key}>
                    <h4>{item.title}</h4>
                    <h5>{item.timeline}</h5>
                    <p>
                      <em>{item.subtitle}</em>
                    </p>
                    <ul>
                      {item.points.map((point, i) => {
                        return <li key={i}>{point}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-4">
              <h3 className="resume-title">Projects</h3>
              {this.state.projects.map((item, key) => {
                return (
                  <div className="resume-item" key={key}>
                    <h4>{item.title}</h4>
                    <h5>{item.subtitle}</h5>
                    <ul>
                      {item.points.map((point, i) => {
                        return <li key={i}>{point}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
              <div className="resume-item">
                <h4>ENVA - College Festival 2020</h4>
                <h5>Dec 2019 – Jan 2020</h5>
                <p>
                  <em>MSIT, New Delhi</em>
                </p>
                <ul>
                  <li>Front-end website development for college fest. </li>
                  <li>Utilized HTML, CSS and JavaScript for designing.</li>
                  <li>Designed five pages for the website using Bootstrap.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 text-center">
              <h3 className="resume-title">
                Download Resume -{" "}
                <a
                  href="assets/img/Resume_Vidhi_Angrish.pdf"
                  target="_blank"
                  download="Resume_VidhiAngrish.pdf"
                >
                  click here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
