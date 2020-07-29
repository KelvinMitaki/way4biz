import React from "react";

import "./Hero.css";

import SideBar from "./SideBar";
import CaroDisplay from "./CaroDisplay";

class Hero extends React.Component {
  handleMouseLeave = () => {
    // empty array
  };
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row" id="hero" onMouseLeave={this.handleMouseLeave}>
          <SideBar />
          <CaroDisplay />
        </div>
      </div>
    );
  }
}

export default Hero;
