import React, { Component } from "react";
import AccountMenu from "./AccountMenu";

import "./Order.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";

export class Orders extends Component {
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
              <h3 className="mb-4">Orders(1)</h3>
              <div className="container">
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>

                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="row order-item box-container">
                  <div className="col-md-4 order-id">
                    <p>Order id: 0795%3436gfo</p>
                  </div>
                  <div className="col-md-4 order-date">
                    <p>1/1/2000</p>
                  </div>
                  <div className="col-md-4 order-details-link">
                    <Link to="/" className="link">
                      Detail
                    </Link>
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

export default Orders;
