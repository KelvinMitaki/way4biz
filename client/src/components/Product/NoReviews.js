import React from "react";

import "./NoReviews.css";

class NoReviews extends React.Component {
  render() {
    return (
      <div className="container-fluid product-no-reviews">
        <p>
          This product has no reviews yet. Order it and be the first to review
          and rate it.
        </p>
      </div>
    );
  }
}
