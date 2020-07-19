import React from "react";
// import AdminDashBoardMenu from "./AdminDashBoardMenu";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { AiOutlineUsergroupAdd, AiFillPushpin } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";

import "./AdminDashBoard.css";

class AdminDashBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <AdminDashBoardHeader />
        <div className="container-fluid p-0" style={{ height: "2000px" }}>
          <AdminDashboardSecondaryHeader />
          <div className="container">
            <div className="row admin-dashboard-top">
              <div
                className="col-lg-3 admin-big-number-wrapper"
                style={{ borderRight: "1px solid #eee", height: "100%" }}
              >
                <div className="admin-big-number">
                  <span>10,000</span>
                  <h3>
                    <AiOutlineUsergroupAdd />
                  </h3>
                </div>
                <p>New Sellers</p>
              </div>
              <div
                className="col-lg-3 admin-big-number-wrapper"
                style={{ borderRight: "1px solid #eee", height: "100%" }}
              >
                <div className="admin-big-number">
                  <span>0</span>
                  <h3>
                    <AiFillPushpin />
                  </h3>
                </div>
                <p>Total Sales</p>
              </div>
              <div
                className="col-lg-3 admin-big-number-wrapper"
                style={{ borderRight: "1px solid #eee", height: "100%" }}
              >
                <div className="admin-big-number">
                  <span>0</span>
                  <h3>
                    <FaMoneyBillAlt />
                  </h3>
                </div>
                <p>Monthly Profit</p>
              </div>
              <div className="col-lg-3 admin-big-number-wrapper">
                <div className="admin-big-number">
                  <span>0</span>
                  <h3>
                    <FaMoneyBillAlt />
                  </h3>
                </div>
                <p>Total Profit</p>
              </div>
            </div>
            <div className="row admin-dashboard-center">
              <h3>Sales Monitoring</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
