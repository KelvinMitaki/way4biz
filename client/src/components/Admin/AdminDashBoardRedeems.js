import React from "react";

import "./AdminDashBoardRedeems.css";
import MobileLogo from "../Header/MobileLogo";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";

class AdminDashBoardRedeems extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <MobileLogo />
        <AdminDashBoardHeader />
        <div className="container-fluid p-0">
          <AdminDashboardSecondaryHeader />
          <div className="container box-container mt-3">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Redeems
            </h3>
            <div className="container">
              <div className="row y" style={{ borderLeft: "3px solid #fff" }}>
                <div className="col-md-3">
                  <h6>Seller</h6>
                </div>
                <div className="col-md-3">
                  <h6>Time</h6>
                </div>
                <div className="col-md-3">
                  <h6>Amount</h6>
                </div>
                <div className="col-md-3">{/* <h6>Helloo</h6> */}</div>
              </div>
              {/* mapping here */}
              <div
                className="row box-container py-2 redeem-wrapper"
                style={{ borderLeft: "3px solid #f76b1a" }}
              >
                <div className="col-md-3">
                  <h6>
                    <strong className="x mr-2">Seller:</strong>
                    <span>
                      <Link
                        to="/"
                        className="redeem-seller"
                        title="visit seller store"
                      >
                        Helloo
                      </Link>
                    </span>
                  </h6>
                </div>
                <div className="col-md-3">
                  <h6>
                    <strong className="x mr-2">Time:</strong>
                    <span>Hellooo</span>
                  </h6>
                </div>
                <div className="col-md-3">
                  <h6>
                    <strong className="x mr-2">Amount:</strong>
                    <span>Hellooo</span>
                  </h6>
                </div>
                <div className="col-md-3">
                  <h6>
                    {/* show this if paid is false */}
                    <button className="redeem-pay-btn btn-md">Pay</button>
                    {/* show this if paid is true */}
                    {/* <button className="redeem-paid-btn btn-md">Paid</button> */}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardRedeems;
