import React from "react";

import "./RedeemPoints.css";
import { BsCheckCircle } from "react-icons/bs";

class RedeemPoints extends React.Component {
  render() {
    return (
      <div className="container py-2">
        {/* show this first */}
        {/* <h6>
          By redeeming your points you will have pricing benefits from our end.
          Only 1000 points and above are redeemable.
        </h6>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-md redeem-btn mt-3">Redeem Now</button>
        </div> */}

        {/* show on successful redeeming */}
        <div className="d-flex align-items-center justify-content-center">
          <BsCheckCircle style={{ fontSize: "100px", color: "#4BB543" }} />
        </div>
        <h6 className="mt-3">
          You successfully redeemed 2000 points. This will lower your monthly
          fee. To earn more points navigate to earn points and do the necessary.
        </h6>
      </div>
    );
  }
}

export default RedeemPoints;
