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
        </div>
        <div className="white-body rider-body">
          <div className="container">
            <div>
              <h3>Welcome Driver</h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Riders;
