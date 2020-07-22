import React from "react";

import "./Hero.css";

import SideBar from "./SideBar";
import CaroDisplay from "./CaroDisplay";

class Hero extends React.Component {
  state = {
    showSubCategoryPopup: false,
  };

  //   shouldComponentUpdate(nextprops, nextState) {
  //     return false;
  //   }

  handleSubCategoryPopup = () => {
    this.setState((prevState) => {
      return {
        showSubCategoryPopup: !prevState.showSubCategoryPopup,
      };
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="hero">
          <SideBar handleSubCategoryPopup={this.handleSubCategoryPopup} />
          <CaroDisplay openCategoryPopup={this.state.showSubCategoryPopup} />
        </div>
      </div>
    );
  }
}

export default Hero;
