import React from "react";

import "./HelpCenter.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

class HelpCenter extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container-fluid p-0 m-0">
            <div className="help-center-hero">
              <h1 id="help-center-header">Looking for something?</h1>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default HelpCenter;
