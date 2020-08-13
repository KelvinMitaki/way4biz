import React from "react";

import "./RedeemPoints.css";

class RedeemPoints extends React.Component {
  render() {
    return (
      <div className="container py-2">
        <h6>
          By redeeming your points you will have pricing benefits from our end.
          Only 1000 points and above are redeemable.
        </h6>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-md redeem-btn mt-3">Redeem Now</button>
        </div>
      </div>
    );
  }
}

export default RedeemPoints;
