import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

import "./MoveToTop.css";

class MoveToTop extends React.Component {
  handleClick = (e) => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div id="move-to-top" onClick={this.handleClick}>
        <IoMdArrowDropup />
      </div>
    );
  }
}

export default MoveToTop;
