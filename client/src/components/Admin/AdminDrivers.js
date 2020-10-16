import React from "react";

import "./AdminDrivers.css";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import ScreenLoader from "../Pages/ScreenLoader";

class AdminDrivers extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <DashBoardHeader />
        <SecondaryHeader />
        <div className="container box-container mt-4">
          <div className="col">
            <h3 style={{ textAlign: "center" }}>Drivers</h3>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="row y">
                <div className="col-md-3">
                  <h6 style={{ paddingLeft: "15px" }}>Driver Name</h6>
                </div>
                <div className="col-md-3">
                  <h6>Phone</h6>
                </div>
                <div className="col-md-3">
                  <h6>Status</h6>
                </div>
                <div className="col-md-3"></div>
              </div>
              {/* mapping here */}

              <div className="admin-seller container">
                <div className="row box-container">
                  <div className="col-md-3">
                    {/* <div className="admin-seller-details"> */}
                    <p>
                      <strong className="mr-2 x">Name:</strong>James Mbuthia
                    </p>
                    {/* </div> */}
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p>
                      <strong className="mr-2 x">Phone:</strong> 0712345678
                    </p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p>
                      <strong className="x mr-2">Status</strong>Free
                    </p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p>
                      <Link
                        to={`/admin-seller/`}
                        className="admin-seller-view-more"
                      >
                        View More
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
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(AdminDrivers);
