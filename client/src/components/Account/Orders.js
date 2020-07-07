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
              <div className="container">
                {this.props.buyerOrders.length !== 0 &&
                  this.props.buyerOrders.map(order => (
                    <div
                      className="row order-item box-container"
                      key={order._id}
                    >
                      <div className="col-md-4 order-id">
                        <p>Order id: {order._id} </p>
                      </div>
                      <div className="col-md-4 order-date">
                        <p>{new Date(order.createdAt).toLocaleDateString()} </p>
                      </div>
                      <div className="col-md-4 order-details-link">
                        <Link to="/" className="secondary-link link">
                          Details
                        </Link>
                      </div>
                    </div>
                  ))}
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
