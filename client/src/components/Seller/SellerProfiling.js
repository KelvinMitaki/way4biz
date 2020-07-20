import React from "react";

import "./SellerProfiling.css";
import SellerTermsAndConditions from "./SellerTermsAndConditions";
import SellerOrientationGuide from "./SellerOrientationGuide";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";

class SellerProfiling extends React.Component {
  state = {
    open: 0,
    proceed: false
  };

  handleCheck = val => {
    this.setState({
      proceed: val
    });
  };

  handleIncrement = e => {
    e.preventDefault();
    this.setState({
      open: this.state.open + 1
    });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState({
      open: this.state.open - 1
    });
  };

  setUpData() {
    console.log(this.state.open);
    switch (this.state.open) {
      case 0:
        return <SellerTermsAndConditions proceed={this.handleCheck} />;
      case 1:
        return <SellerOrientationGuide proceed={this.handleCheck} />;
      default:
        break;
    }
  }

  render() {
    let nextButton;
    if (this.state.proceed) {
      nextButton = (
        <button className="btn btn-md" onClick={this.handleIncrement}>
          Next
        </button>
      );
    } else {
      nextButton = (
        <button className="btn btn-md" onClick={this.handleIncrement} disabled>
          Next
        </button>
      );
    }
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div
            className="col-lg-9 mx-auto py-3"
            style={{ backgroundColor: "#fff" }}
          >
            {this.setUpData()}

            <div className="nav-btns container my-3">
              {this.state.open === 0 ? (
                <div></div>
              ) : (
                <button className="btn btn-md" onClick={this.handleDecrement}>
                  Back
                </button>
              )}

              {this.state.open === 4 ? null : nextButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerProfiling;
