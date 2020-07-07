import React, { Component } from "react";
import AccountMenu from "./AccountMenu";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./BuyerOrderDetails.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { connect } from "react-redux";

class BuyerOrderDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <AccountHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8 box-container order-details-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <IconContext.Provider
                    value={{ className: "arrow-icon ml-3 my-2" }}
                  >
                    <div className="d-flex align-items-center">
                      <Link to="/orders">
                        <BsArrowLeft />
                      </Link>
                      <h3 className="ml-3">Order Details</h3>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
              <div className="container-fluid">
                <div className="buyer-order-details-info my-2">
                  <div style={{ borderBottom: "1px solid #eee" }}></div>
                  <p className="mt-3">
                    <strong>Order No.</strong>26426282529
                  </p>
                  <p>10 items</p>
                  <p>Place on 12/4/05</p>
                  <p className="mb-3">Total Ksh.40,000</p>
                  <div style={{ borderBottom: "1px solid #eee" }}></div>
                </div>
                <div className="container-fluid p-0">
                  <h5 className="my-2" style={{ textTransform: "uppercase" }}>
                    Items in your order
                  </h5>
                </div>
                <div className="container-fluid p-0">
                  {/* mapping here */}
                  <div className="buyer-order-detail-wrapper box-container">
                    <div
                      style={{ borderBottom: "1px solid #eee" }}
                      className="p-3"
                    >
                      <p>
                        <strong className="mr-2">Status:</strong>Received
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 d-flex align-items-center">
                        <img src="/1.jpg" height="150px" />
                        <p>
                          Great Beer Great Beer Great Beer Great Beer Great Beer
                          Great Beer
                        </p>
                      </div>
                      <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <p>
                          <strong>Quantity:</strong>10
                        </p>
                        <p>
                          <strong>Total Price:</strong>10,000
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ borderTop: "1px solid #eee" }}
                      className="d-flex justify-content-end p-3"
                    >
                      <p>
                        <Link id="buy-again-link" to="/cart">
                          Buy Again
                        </Link>
                      </p>
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

export default BuyerOrderDetails;
