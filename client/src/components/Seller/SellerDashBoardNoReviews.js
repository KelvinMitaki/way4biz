import React from "react";

import "./SellerDashBoardReviews.css";

class SellerDashBoardNoReviews extends React.Component {
  render() {
    return (
      <div className="container seller-dashboard-no-reviews">
        <h4>Your products have no reviews yet.</h4>
      </div>
    );
  }
}

export default SellerDashBoardNoReviews;
