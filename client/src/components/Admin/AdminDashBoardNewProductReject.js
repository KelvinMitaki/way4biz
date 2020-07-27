import React from "react";

import "./AdminDashBoardNewProductReject.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";

class AdminDashBoardNewProductReject extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container box-container mt-4 product-reject-form-wrapper">
          <form className="form-group">
            <div className="d-flex justify-content-center">
              <label
                htmlFor="product-reject-input"
                style={{ marginBottom: "4px", fontSize: "25px" }}
              >
                Why Reject?
              </label>
            </div>

            <textarea
              id="product-reject-input"
              className="form-control"
            ></textarea>
            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-md product-send-rejection">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardNewProductReject;
