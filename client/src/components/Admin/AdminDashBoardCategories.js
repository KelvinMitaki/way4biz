import React from "react";

import "./AdminDashBoardCategories.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";

class AdminDashBoardCategories extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container mt-4">
          <div className="box-container">
            <h3 className="my-2" style={{ textAlign: "center" }}>
              Categories
            </h3>
            <div className="container my-2" id="add-category-btn-wrapper">
              <Link to="/" className="btn btn-md add-category-btn">
                Add Category
              </Link>
            </div>
            <div className="container">
              {/* mapping here */}
              <div className="box-container admin-category-wrapper">
                <div className="row p-3 align-items-center">
                  <div
                    className="col-md-4"
                    style={{ borderRight: "1px solid #d4d4d4" }}
                  >
                    <h4>Women's Clothing</h4>
                  </div>
                  <div className="col-md-8">
                    <p>Dress,Bikers,Shorts,Stockings,Inner Wears :),Blahs,</p>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #d4d4d4" }}>
                  <div>
                    <button className="btn btn-lg btn-block edit-category-btn">
                      Edit
                    </button>
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

export default AdminDashBoardCategories;
