import React from "react";

import "./SellerDashBoard.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";

class SellerDashBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-md-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-md-9">
            <div className="dashboard-content">
              <h1 style={{ textAlign: "center" }}>Welcome Someone</h1>
              <hr />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerDashBoard;
