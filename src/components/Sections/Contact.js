import React from "react";

export default class Contact extends React.Component {
    render(){
        return(
            <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
              </div>
              <div className="row mt-1">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="email">
                      <i className="icofont-envelope" />
                      <h4>Email:</h4>
                      <p>vidhiangrish.dev@gmail.com</p>
                    </div>
                    <div className="phone">
                      <i className="icofont-linkedin" />
                      <h4>Connect:</h4>
                      <a href="https://linkedin.com/in/vidhi-angrish" target="_blank"><p>linkedin.com/in/vidhi-angrish1</p></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form
                    action="https://formspree.io/xwkrzvdd"
                    method="POST"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validate" />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
    }
}