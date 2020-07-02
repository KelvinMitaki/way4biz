import React from "react";

import "./DashBoardProductMediumScreens.css";

class DashBoardProductMediumScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col dashboard-product-medium-screen-section box-container">
            <div className="col dashboard-product-md-screen-image">
              <div className="db-md-top">
                <div>
                  <img src="product-imgs/1.jpg" />
                  <p>Samsung LG "32</p>
                </div>
                <div className="seller-db-md-screen-price-status">
                  <div>
                    <p>Price:</p>
                    <p>Ksh.30,000</p>
                  </div>
                  <div>
                    <p>Status:</p>
                    <p>Live</p>
                  </div>
                </div>
              </div>
              <div className="db-md-bottom">
                <p>Qty:3</p>
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardProductMediumScreen;
