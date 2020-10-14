import React from "react";

import "./Riders.css";
import Logo from "../Header/Logo";

class Riders extends React.Component {
  render() {
    return (
      <div>
        <div id="rider-header">
          <div className="container">
            <Logo />
          </div>
          <div className="white-body"></div>
        </div>
      </div>
    );
  }
}

export default Riders;
