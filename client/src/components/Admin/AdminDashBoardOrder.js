import React from "react";

import "./AdminDashBoardOrder.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link, withRouter, Redirect } from "react-router-dom";
import { fetchAdminOrder } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
// import { BsArrowLeft, BsArrowLeftRight } from "react-icons/bs";
// import { RiArrowUpDownLine } from "react-icons/ri";

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
                <div className="box-container p-3">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong className="mr-2">Order ID: </strong>
                        {this.props.adminOrder._id}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <strong className="mr-2">Date: </strong>
                      {new Date(
                        this.props.adminOrder.createdAt
                      ).toLocaleString()}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong className="mr-2">Status:</strong>
                        {this.props.adminOrder.delivered ? (
                          <span> Delivered</span>
                        ) : (
                          <span> Pending</span>
                        )}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <strong className="mr-2">Items No: </strong>
                      {this.props.adminOrder.items.length.toLocaleString()}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <strong className="mr-2">Buyer:</strong>
                        {this.props.adminOrder.buyer.firstName}{" "}
                        {this.props.adminOrder.buyer.lastName}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <Link
                          to={`/root/admin-order/view-items/${this.props.adminOrder._id}`}
                          className="admin-order-items-view"
                        >
                          View Items
                        </Link>
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
