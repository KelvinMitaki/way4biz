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
import LineGraph from "./LineGraph";
import {
  getStock,
  fetchNewSellers,
  fetchAdminOrders,
  fetchAdminPendingOrders,
  fetchWeeklySales,
  setPendingOrders,
  fetchUnderReview
} from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoard extends React.Component {
  state = {
    doughnatData: {
      title: "test"
    },
    lineData: {
      data: [20, 10]
    }
  };
  componentDidMount() {
    this.props.getStock();
    this.props.fetchNewSellers();
    this.props.fetchAdminOrders();
    this.props.fetchAdminPendingOrders();
    this.props.fetchWeeklySales();
    this.props.fetchUnderReview();
  }

  render() {
    if (
      !this.props.newSellers ||
      !this.props.adminOrders ||
      !this.props.adminPendingOrders ||
      !this.props.weeklySales ||
      !this.props.underReview
    )
      return <ScreenLoader />;

    const todayOrders =
      this.props.adminOrders &&
      this.props.adminOrders.todaysOrdersCount &&
      this.props.adminOrders.todaysOrdersCount.length !== 0 &&
      this.props.adminOrders.todaysOrdersCount[0].todaysOrders;

    const total =
      this.props.adminOrders && this.props.adminOrders.totalOrdersCount;
    const calc = Math.round((todayOrders / total) * 100);
    let { todaysPendingOrders, pendingOrders } = this.props.adminPendingOrders;
    let calcPending;
    if (typeof todaysPendingOrders === "number") {
      calcPending = Math.round((todaysPendingOrders / pendingOrders) * 100);
    } else {
      calcPending = 0;
    }
    if (typeof pendingOrders === "object") {
      pendingOrders = 0;
    }
    function kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    }
    if (this.props.stock.length !== 0) {
      return (
        <div className="container-fluid dashboard-wrapper">
          <AdminDashBoardHeader />
          <div className="container-fluid p-0">
            <AdminDashboardSecondaryHeader />
            <div className="container mb-5">
              <div className="row admin-dashboard-top">
                <div
                  className="col-lg-3 admin-big-number-wrapper"
                  style={{ borderRight: "1px solid #eee", height: "100%" }}
                >
                  <div className="admin-big-number">
                    <span>
                      {this.props.newSellers &&
                        this.props.newSellers.sellers &&
                        this.props.newSellers.sellers.length.toLocaleString()}
                    </span>
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
                    <span>
                      {this.props.stock.find(s => s.label === "Stock Out")
                        .value &&
                        this.props.stock
                          .find(s => s.label === "Stock Out")
                          .value.toLocaleString()}
                    </span>
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
                    <span>
                      {(
                        this.props.adminOrders &&
                        this.props.adminOrders.monthlyPrice &&
                        kFormatter(this.props.adminOrders.monthlyPrice * 0.1)
                      ).toLocaleString() || 0}
                    </span>
                    <h3>
                      <FaMoneyBillAlt />
                    </h3>
                  </div>
                  <p>Monthly Profit</p>
                </div>
                <div className="col-lg-3 admin-big-number-wrapper">
                  <div className="admin-big-number">
                    <span>
                      {(
                        this.props.adminOrders &&
                        this.props.adminOrders.totalPrice &&
                        kFormatter(this.props.adminOrders.totalPrice * 0.1)
                      ).toLocaleString() || 0}
                    </span>
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
                          data={this.props.stock}
                          colors={"#f76b1a"}
                          title={this.state.doughnatData.title}
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
                            <Link to="/admin-orders">
                              <div className="admin-individual-performance-upper-text">
                                <p>Orders</p>
                                <p>
                                  {this.props.adminOrders &&
                                    this.props.adminOrders.totalOrdersCount &&
                                    this.props.adminOrders.totalOrdersCount.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  {todayOrders ? calc : 0}% change in the past
                                  24 hours
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="admin-inividual-performance-wrapper">
                            <Link
                              to="/admin-orders"
                              onClick={() => this.props.setPendingOrders()}
                            >
                              <div className="admin-individual-performance-upper-text">
                                <p>
                                  Pending Orders{" "}
                                  {todaysPendingOrders && (
                                    <span
                                      className="badge"
                                      style={{
                                        color: "#fff",
                                        backgroundColor: "#f76b1a"
                                      }}
                                    >
                                      {todaysPendingOrders}
                                    </span>
                                  )}
                                </p>
                                <p>
                                  {pendingOrders &&
                                    pendingOrders.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  {calcPending}% change in the past 24 hours
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="admin-inividual-performance-wrapper">
                            <Link to="/admin/new-products">
                              <div className="admin-individual-performance-upper-text">
                                <p>
                                  New Products{" "}
                                  {this.props.underReview.length !== 0 && (
                                    <span
                                      className="badge"
                                      style={{
                                        color: "#fff",
                                        backgroundColor: "#f76b1a"
                                      }}
                                    >
                                      {this.props.underReview.length}
                                    </span>
                                  )}
                                </p>
                                <p>+50,000</p>
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  1% change in the past 24 hours
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="admin-inividual-performance-wrapper">
                            <div style={{ cursor: "hover" }}>
                              <div className="admin-individual-performance-upper-text">
                                <p>Payments</p>
                                <p>
                                  {this.props.adminOrders &&
                                    this.props.adminOrders.totalPrice &&
                                    this.props.adminOrders.totalPrice.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  {Math.round(
                                    (this.props.adminOrders.todayTotalPrice /
                                      this.props.adminOrders.totalPrice) *
                                      100
                                  )}
                                  % change in the past 24 hours
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="admin-inividual-performance-wrapper">
                            <Link to="/admin/complaints">
                              <div className="admin-individual-performance-upper-text">
                                <p>Complaints</p>
                                <p>
                                  {this.props.adminOrders &&
                                    this.props.adminOrders.totalPrice &&
                                    this.props.adminOrders.totalPrice.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>
                                  {Math.round(
                                    (this.props.adminOrders.todayTotalPrice /
                                      this.props.adminOrders.totalPrice) *
                                      100
                                  )}
                                  % change in the past 24 hours
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <LineGraph
                            data={this.state.lineData.data}
                            colors={"#f76b1a"}
                            title={this.state.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row admin-dashboard-bottom">
                <Link to="/admin/rejects">Rejects</Link>
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
    return <ScreenLoader />;
  }
}
const mapStateToProps = state => {
  return {
    stock: state.product.stock,
    adminOrders: state.product.adminOrders,
    adminPendingOrders: state.product.adminPendingOrders,
    underReview: state.product.underReview,
    weeklySales: state.product.weeklySales,
    newSellers: state.sellerRegister.newSellers
  };
};
export default connect(mapStateToProps, {
  getStock,
  fetchNewSellers,
  fetchAdminOrders,
  fetchAdminPendingOrders,
  fetchWeeklySales,
  setPendingOrders,
  fetchUnderReview
})(AdminDashBoard);
