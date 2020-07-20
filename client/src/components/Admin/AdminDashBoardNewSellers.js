import React from "react";

import "./AdminDashBoardNewSellers.css";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";

class AdminDashBoardNewSellers extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <DashBoardHeader />
        <SecondaryHeader />
        <div className="container box-container mt-4">
          <div className="col">
            <h3 style={{ textAlign: "center" }}>New Sellers</h3>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="row y">
                <div className="col-md-6">
                  <h6 style={{ paddingLeft: "15px" }}>Seller Info</h6>
                </div>
                <div className="col-md-3">
                  <h6>Date Joined</h6>
                </div>
                <div className="col-md-3">
                  <h6>More</h6>
                </div>
              </div>
              {/* fucking mapping here */}
              <div className="admin-new-seller container">
                <div className="row box-container">
                  <div className="col-md-6">
                    <div className="admin-seller-details">
                      <p>
                        <strong className="x mr-2">Name:</strong>Hello world
                        Hello world Hello world Hello world
                      </p>
                      <p>
                        <strong className="x mr-2">StoreName:</strong>Hello
                        world
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p>
                      <strong className="x mr-2">Date Joined</strong>10/10/2030
                    </p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p>
                      <Link
                        to="/admin-new-seller"
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

export default AdminDashBoardNewSellers;
