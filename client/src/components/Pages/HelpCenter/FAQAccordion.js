import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

class FAQAccordion extends React.Component {
  state = { open: false };

  handleOpen = (e) => {
    this.setState({
      open: true,
    });
  };

  handleClose = (e) => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div>
        {!this.state.open ? (
          <div>
            <p onClick={this.handleOpen}>
              <BsPlusCircle /> How to sell on way4biz?
            </p>
          </div>
        ) : (
          <div>
            <p onClick={this.handleClose}>
              <AiOutlineMinusCircle /> How to sell on way4biz?
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FAQAccordion;
