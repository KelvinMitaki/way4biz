import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardOrder.css";
import { fetchSellerOrders } from "../../redux/actions";
import { connect } from "react-redux";

class DashBoardOrder extends React.Component {
  componentDidMount() {
    this.props.fetchSellerOrders();
  }
  render() {
    return (
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 d-flex box-container seller-dashboard-order-wrapper">
            <div id="dashboard-order-id" className="col-lg-4">
              <div>
                <p>
                  <strong className="mr-2">Order id:</strong>9628252920
                </p>
                <p>
                  <strong className="mr-2">Date:</strong>20/2/2000
                </p>
              </div>
            </div>
            <div id="dashboard-order-num-items" className="col-lg-2">
              <div>
                <p>10</p>
                <p id="view-order-details-link">
                  <Link to="/order/details">View Items</Link>
                </p>
              </div>
            </div>
            <div id="dashboard-order-destination" className="col-lg-2">
              Rongai
            </div>
            <div id="dashboard-order-total-amount" className="col-lg-2">
              ksh.30,000
            </div>
            <div id="dashboard-delivery-status" className="col-lg-1">
              Delivered
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerOrders: state.sellerRegister.sellerOrders
  };
};
export default connect(mapStateToProps, { fetchSellerOrders })(DashBoardOrder);
