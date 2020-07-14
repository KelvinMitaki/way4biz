import React from "react";

import "./SellerDashBoardReviews.css";

class SellerDashBoardNoReviews extends React.Component {
  render() {
    return (
      <div className="container seller-dashboard-no-reviews">
        <p>Your products have no reviews yet.</p>
      </div>
    );
  }
}

export default SellerDashBoardNoReviews;
