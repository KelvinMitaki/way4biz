import React from "react";

import "./DashBoardOrderMediumScreen.css";
import { Link } from "react-router-dom";

class DashBoardOrderMediumScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col box-container dashboard-order-medium-screen-wrapper">
            <div id="db-md-order-id">
              <p>Order id:2995433830</p>
              <p>Date:20/20/2020</p>
            </div>
            <div id="db-md-order-items">
              <p>Qty:6</p>
              <p id="view-order-details-link">
                <Link to="/order/details">View Items</Link>
              </p>
            </div>
            <div id="db-md-order-destination">
              <p>Destination:Rongai</p>
            </div>

            <div id="db-md-order-amount-status">
              <p>Toatal:Ksh.30,000</p>
              <p>Status:Delivered</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardOrderMediumScreen;
