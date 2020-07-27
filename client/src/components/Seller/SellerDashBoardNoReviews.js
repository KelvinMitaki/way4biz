import React from "react";
import { MdRateReview } from "react-icons/md";
import "./SellerDashBoardReviews.css";
import { IconContext } from "react-icons/lib";

class SellerDashBoardNoReviews extends React.Component {
  render() {
    return (
      <div className="container seller-dashboard-no-reviews">
        <div className="box-container p-2">
          <IconContext.Provider value={{ className: "seller-no-reviews" }}>
            <MdRateReview />
          </IconContext.Provider>
          <h4 className="mt-2">Your products have no reviews yet.</h4>
        </div>
      </div>
    );
  }
}

export default SellerDashBoardNoReviews;
