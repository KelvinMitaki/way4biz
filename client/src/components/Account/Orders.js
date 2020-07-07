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
                  <div className="row buyer-order-wrapper box-container">
                    <div className="col-6 col-lg-6">
                      <p>
                        <strong className="x mr-2">ID:</strong>324364363
                      </p>
                      <p>
                        <strong className="x mr-2">Date:</strong>1/1/2020
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      <p>
                        <strong className="x mr-2">Price</strong>Ksh.30,000
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      <p>Delivered</p>
                    </div>
                  </div>
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
const mapStateToProps = (state) => {
  return {
    buyerOrders: state.product.buyerOrders,
  };
};
export default connect(mapStateToProps, { fetchBuyerOrders })(Orders);
