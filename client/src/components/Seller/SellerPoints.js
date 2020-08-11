import React from "react";

import "./SellerPoints.css";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import SellerDashBoardMenu from "./SellerDashBoardMenu";

class SellerPoints extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mt-5">
            <div className="container seller-dashboard-wrapper m-0"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerPoints;
