import React from "react";
import { BsCheckCircle } from "react-icons/bs";

import "./ContactSuccess.css";

class ContactSuccess extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content white-body">
          <HelpCenterHeader />
          <div
            className="container-fluid p-0 m-0"
            style={{ backgroundColor: "#fff" }}
          ></div>
          <div className="d-flex align-items-center justify-content-center">
            <BsCheckCircle style={{ fontSize: "100px", color: "#4BB543" }} />
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
