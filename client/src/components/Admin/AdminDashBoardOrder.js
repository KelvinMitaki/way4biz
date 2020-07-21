import React from "react";

import "./AdminDashBoardOrder.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { Link, withRouter, Redirect } from "react-router-dom";
import { fetchAdminOrder } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { BsArrowLeft, BsArrowLeftRight } from "react-icons/bs";
import { RiArrowUpDownLine } from "react-icons/ri";

class AdminDashBoardOrder extends React.Component {
  componentDidMount() {
    this.props.fetchAdminOrder(
      this.props.match.params.orderId,
      this.props.history
    );
  }
  render() {
    if (!this.props.adminOrder) return <ScreenLoader />;
    if (this.props.adminOrder && this.props.adminOrder._id) {
      return (
        <div className="container-fluid p-0">
          <AdminDashBoardHeader />
          <AdminDashboardSecondaryHeader />
          <div className="container mt-4">
            <div className="box-container">
              <div>
                <IconContext.Provider
                  value={{ className: "arrow-icon ml-3 my-2" }}
                >
                  <div className="d-flex align-items-center">
                    <Link to="/admin-orders">
                      <BsArrowLeft />
                    </Link>
                    <h3 className="ml-3">Order ID</h3>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="container">
                <div className="box-container p-2">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong>Order ID: </strong>
                        {this.props.adminOrder._id}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <strong>Date: </strong>
                      {new Date(
                        this.props.adminOrder.createdAt
                      ).toLocaleString()}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong>Status:</strong>
                        {this.props.adminOrder.delivered ? (
                          <span> Delivered</span>
                        ) : (
                          <span> Pending</span>
                        )}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <strong>Items No: </strong>
                      {this.props.adminOrder.items.length.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="row my-3 align-items-center">
                  <div className="col-md-5 admin-order-buyer">
                    <div>
                      <h4>Buyer</h4>
                      <p>
                        <strong>Name:</strong>John Doe
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 admin-order-arrow my-2">
                    <div className="y">
                      <BsArrowLeftRight
                        style={{
                          fontSize: "40px",
                          color: "#f76b1a"
                        }}
                      />
                    </div>
                    <div className="x">
                      <RiArrowUpDownLine
                        style={{ fontSize: "40px", color: "#f76b1a" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 admin-order-seller">
                    <div>
                      <h4>Seller</h4>
                      <p>
                        <strong>Name:</strong>Jane Doe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}
const mapStateToProps = state => {
  return {
    adminOrder: state.product.adminOrder
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchAdminOrder })(AdminDashBoardOrder)
);
