import React from "react";
// import AdminDashBoardMenu from "./AdminDashBoardMenu";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { AiOutlineUsergroupAdd, AiFillPushpin } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./AdminDashBoard.css";
import DoughnutChart from "./DoughnutChart";

class AdminDashBoard extends React.Component {
  state = {
    data: [
      {
        label: "Stock In",
        value: 100,
      },
      {
        label: "Stock Out",
        value: 200,
      },
    ],
    title: "test",
  };
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <AdminDashBoardHeader />
        <div className="container-fluid p-0">
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
                    <BsArrowRepeat />
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
                    <AiFillPushpin />
                  </h3>
                </div>
                <p>Total Profit</p>
              </div>
            </div>
            <div className="row admin-dashboard-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 admin-stock-report">
                    <div className="row">
                      <h4 style={{ textAlign: "center", width: "100%" }}>
                        Stock Report
                      </h4>
                    </div>
                    <div className="mt-5">
                      <DoughnutChart
                        data={this.state.data}
                        colors={"#f76b1a"}
                        title={this.state.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 admin-performance">
                    <div className="row">
                      <h4
                        className="mb-3"
                        style={{ textAlign: "center", width: "100%" }}
                      >
                        Performance
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 p-0">
                        <div className="admin-inividual-performance-wrapper">
                          <Link to="/">
                            <div className="admin-individual-performance-upper-text">
                              <p>Orders</p>
                              <p>+50,000</p>
                            </div>
                            <div>
                              <p style={{ fontSize: "12px" }}>
                                1% change today
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="admin-inividual-performance-wrapper">
                          <Link to="/">
                            <div className="admin-individual-performance-upper-text">
                              <p>Pending Orders</p>
                              <p>+50,000</p>
                            </div>
                            <div>
                              <p style={{ fontSize: "12px" }}>
                                1% change today
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="admin-inividual-performance-wrapper">
                          <Link to="/">
                            <div className="admin-individual-performance-upper-text">
                              <p>Transactions</p>
                              <p>+50,000</p>
                            </div>
                            <div>
                              <p style={{ fontSize: "12px" }}>
                                1% change today
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="admin-inividual-performance-wrapper">
                          <Link to="/">
                            <div className="admin-individual-performance-upper-text">
                              <p>Payments</p>
                              <p>+50,000</p>
                            </div>
                            <div>
                              <p style={{ fontSize: "12px" }}>
                                1% change today
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-7"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row admin-dashboard-bottom">
              <h3>Sales Monitoring</h3>
              <div className="dummy-content">
                The quick brown fox jumped over the lazy dog
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
