import React from "react";

import "./SideBar.css";

import HeroCategories from "./HeroCategories";

class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="col-lg-3">
        <HeroCategories
          handleSubCategoryPopup={this.props.handleSubCategoryPopup}
        />
      </div>
    );
  }
}

export default SideBar;
