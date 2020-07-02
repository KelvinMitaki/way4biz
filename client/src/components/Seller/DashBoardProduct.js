import React from "react";

import "./DashBoardProduct.css";

class DashBoardProduct extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex dashboard-product-section box-container">
            <div id="dashboard-product-image" className="col col-lg-5">
              <img src="product-imgs/1.jpg" />
              <div className="ml-2">
                <p>Samsung LG "32</p>
              </div>
            </div>
            <div id="dashboard-product-quantity" className="col col-lg-2">
              10
            </div>
            <div id="dashboard-product-price" className="col col-lg-2">
              Ksh.30,000
            </div>
            <div id="dashboard-product-status" className="col col-lg-2">
              Live
            </div>
            <div id="dashboard-product-edit" className="col col-lg-1">
              Edit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardProduct;
