import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardOrder.css";
import {
  fetchSellerOrders,
  fetchSellerOrderDetails,
} from "../../redux/actions";
import { connect } from "react-redux";

class DashBoardOrder extends React.Component {
  componentDidMount() {
    this.props.fetchSellerOrders();
  }
  render() {
    return (
      <div className="container-fluid p-4" style={{ backgroundColor: "#fff" }}>
        <div className="row no-gutters y">
          <div className="col d-flex mb-2">
            <h6 className="col-lg-4 p-0" style={{ textAlign: "left" }}>
              Order Info
            </h6>
            <h6 className="col-lg-2 p-0">Items No.</h6>
            <h6 className="col-lg-3 p-0">Destination</h6>
            <h6 className="col-lg-2 p-0">Total Amount</h6>
            <h6 className="col-lg-1 p-0">Status</h6>
          </div>
        </div>
        <div className="container-fluid p-0">
          {/* mapping here */}
          <div className="row dashboard-order-wrapper box-container no-gutters">
            <div className="col-6 col-lg-4">
              <div>
                <strong className="x mr-2">ID:</strong>9759549363
              </div>
              <div>
                <strong className="x mr-2">Date:</strong>1/1/2020
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div>
                <strong className="x mr-2">Qty:</strong>10
              </div>
              <div className="view-order-details-link">
                <Link to="/">View Items</Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div>Rongai</div>
            </div>
            <div className="col-6 col-lg-2">
              <div>Ksh.30,000</div>
            </div>
            <div className="col-6 col-lg-1">
              <div>Delivered</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sellerOrders: state.sellerRegister.sellerOrders,
  };
};
export default connect(mapStateToProps, {
  fetchSellerOrders,
  fetchSellerOrderDetails,
})(DashBoardOrder);
