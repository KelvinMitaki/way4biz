import React from "react";

import "./DashBoardProduct.css";

class DashBoardProduct extends React.Component {
  render() {
    return (
      <div className="col dashboard-product-section">
        <div id="dashboard-product-image" className="col-12 col-md-6"></div>
        <div id="dashboard-product-quantity" className="col-12 col-md-2"></div>
        <div id="dashboard-product-price" className="col-12 col-md-2"></div>
        <div id="dashboard-product-quantity" className="col-12 col-md-2"></div>
      </div>
    );
  }
}

export default DashBoardProduct;
