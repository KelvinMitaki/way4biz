import React from "react";

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
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
