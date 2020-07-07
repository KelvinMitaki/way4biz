import React, { Component } from "react";
import AccountMenu from "./AccountMenu";

import "./Order.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { fetchBuyerOrders } from "../../redux/actions";
import { connect } from "react-redux";

export class Orders extends Component {
  componentDidMount() {
    this.props.fetchBuyerOrders();
  }
  render() {
    return (
      <React.Fragment>
        <AccountHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8 box-container  orders-wrapper">
              <h3 className="mb-4">Orders({this.props.buyerOrders.length})</h3>
              <div className="container-fluid">
                <div className="row y">
                  <div className="col-lg-6">Order Info</div>
                  <div className="col-lg-3">Amount</div>
                  <div className="col-lg-3">Status</div>
                </div>
                <div className="container-fluid">
                  {/* mapping here */}
                  {this.props.buyerOrders.length !== 0 &&
                    this.props.buyerOrders.map(order => (
                      <div
                        key={order._id}
                        className="row buyer-order-wrapper box-container"
                      >
                        <div className="col-6 col-lg-6">
                          <p>
                            <strong className="x mr-2">ID:</strong>
                            {order._id}
                          </p>
                          <p>
                            <strong className="x mr-2">Date:</strong>
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <p>
                            <strong className="x mr-2">Price</strong>Ksh.
                            {order.totalPrice.toLocaleString()}
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <p>Delivered</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    buyerOrders: state.product.buyerOrders
  };
};
export default connect(mapStateToProps, { fetchBuyerOrders })(Orders);
