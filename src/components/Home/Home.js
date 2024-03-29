import React from "react";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.content}
        <Footer />
        {/* <a href="#" className="back-to-top">
          <i className="bx bx-up-arrow-alt" />
        </a> */}
      </React.Fragment>
    );
  }
}
export default Home;
