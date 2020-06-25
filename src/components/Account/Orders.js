import React, { Component } from "react";
import AccountMenu from "./AccountMenu";

import "./Order.css";
import { Link } from "react-router-dom";

export class Orders extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <AccountMenu />
          </div>
          <div className="col-lg-8 box-container">
            <h3 className="mb-4">Orders(1)</h3>
            <div className="container orders-wrapper">
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
    );
  }
}

export default Orders;
