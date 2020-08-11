import React from "react";

import "./EarnPoints.css";

class EarnPoints extends React.Component {
  render() {
    return (
      <div className="container py-2" style={{ backgroundColor: "#fff" }}>
        <h6>
          You currently have 1000 points. To earn more points refer many sellers
          to sell on our platform. The more points you have, the higher the
          chances of winnig a brand new suzuki porsche.
        </h6>

        <h6 className="my-2">
          Lets get you more points. Key in the phone number or email of someone
          to refer.
        </h6>
        <div className="input-group form-group">
          <input
            placeholder="Email or Phone number"
            className="form-control referral-input"
          />
          <div className="input-group-append">
            <button id="referral-btn">Send Referral</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EarnPoints;
