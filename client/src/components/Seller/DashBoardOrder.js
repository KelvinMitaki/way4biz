import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardOrder.css";

class DashBoardOrder extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex box-container seller-dashboard-order-wrapper">
            <div id="dashboard-order-id" className="col-lg-4">
              <div>
                <p>Order id:9628252920</p>
                <p>Date:20/2/2000</p>
              </div>
            </div>
            <div id="dashboard-order-num-items" className="col-lg-1">
              <div>
                <p>10</p>
                <p>
                  <Link to="/">View Items</Link>
                </p>
              </div>
            </div>
            <div id="dashboard-order-destination" className="col-lg-3">
              Rongai
            </div>
            <div id="dashboard-order-return-policy" className="col-lg-1">
              None
            </div>
            <div id="dashboard-order-total-amount" className="col-lg-1">
              ksh.30,000
            </div>
            <div id="dashboard-delivery-status" className="col-lg-2">
              Delivered
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoardOrder;
