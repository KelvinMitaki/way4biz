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
        <div className="white-body">
          <div className="container">
            <h4>Helloo</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Riders;
