import React from "react";

import "./AdminDashBoardNewProducts.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";

class AdminDashBoardNewProducts extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container box-container mt-4">
          <h3 className="my-2" style={{ textAlign: "center" }}>
            New Products
          </h3>
          <div className="container my-1">
            <div className="row y">
              <div className="col-lg-3">
                <h6>Owner</h6>
              </div>
              <div className="col-lg-3">
                <h6>Name</h6>
              </div>
              <div className="col-lg-3">
                <h6>Date Added</h6>
              </div>
              <div className="col-lg-3">
                <h6>Review</h6>
              </div>
            </div>
          </div>

          <div className="container">
            {/* mapping here */}
            <div className="row admin-new-product box-container py-2">
              <div className="col-lg-3">
                <strong className="x mr-1">Owner:</strong>
                <p>
                  John Doe John Doe John Doe John Doe John Doe John DoevJohn Doe
                </p>
              </div>
              <div className="col-lg-3">
                <strong className="x mr-1">Name:</strong>
                <p>Great Beer</p>
              </div>
              <div className="col-lg-3">
                <strong className="x mr-1">Date Added:</strong>
                <p>1/1/1</p>
              </div>
              <div className="col-lg-3">
                <Link to="/admin/new-product" className="review-new-product">
                  Review
                </Link>
              </div>
            </div>
          </div>
          {/* if no new products */}
          <div className="no-new-products my-2">
            <h6 style={{ textAlign: "center" }}>No new products yet.</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardNewProducts;
