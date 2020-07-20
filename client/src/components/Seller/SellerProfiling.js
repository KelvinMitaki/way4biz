import React from "react";

import "./SellerProfiling.css";
import "./SellerTermsAndConditions";
import "./SellerOrientationGuide";
import SellerOrientationGuide from "./SellerOrientationGuide";

class SellerProfiling extends React.Component {
  state = {
    open: 0,
    data: [
      <SellerTermsAndConditions checked={this.handleCheck} />,
      <SellerOrientationGuide checked={this.handleCheck} />,
    ],
    checked: false,
  };

  handleCheck = (val) => {
    this.setState({
      checked: val,
    });
  };

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        open: prevState.open + 1,
      };
    });
  };

  handleDecrement = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        open: prevState - 1,
      };
    });
  };

  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mx-auto">
            <div>{this.state.data[this.state.open]}</div>
            <div className="nav-btns">
              {this.state.open == 0 ? null : (
                <button
                  className="btn btn-md float-left"
                  onClick={this.handleIncrement}
                >
                  Back
                </button>
              )}

              {this.state.open == this.state.data.length - 1 ? null : (
                <button
                  className="btn btn-md float-right"
                  onClick={this.handleDecrement}
                  disabled={!this.state.checked}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerProfiling;
