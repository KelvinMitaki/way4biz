import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

import "./MoveToTop.css";

class MoveToTop extends React.Component {
  handleClick = (e) => {
    scroll.scrollToTop({ duration: 1000 });
  };
  render() {
    return (
      <div
        id="move-to-top"
        style={{ cursor: "pointer" }}
        onClick={this.handleClick}
      >
        <IoMdArrowDropup style={{ fontSize: "20px" }} />
      </div>
    );
  }
}

export default MoveToTop;
