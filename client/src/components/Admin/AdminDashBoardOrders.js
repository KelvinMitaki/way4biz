import React from "react";

import "./AdminDashBoardOrders.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoardOrders extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container" style={{ backgroundColor: "#fff" }}>
          <div className="box-container">
            <h3>Orders</h3>
          </div>
          <div className="admin-dashboard-order-wrapper box-container">
            <div className="admin-dashboard-order">
              <div className="row">
                <div className="col-lg-6">
                  <strong>Order ID: </strong>
                  <span>123456</span>{" "}
                </div>
                <div className="col-lg-6">
                  <strong>Date: </strong>
                  <span>1/1/01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardOrders;
