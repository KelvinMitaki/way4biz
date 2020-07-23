import React from "react";
import "./AdminDashBoardEditCategory.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoardEditCategory extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container mt-4">
          <div className="box-container">
            <h3 className="my-2" style={{ textAlign: "center" }}>
              Edit Category
            </h3>
            <div className="container">
              <div className="form-group">
                <label htmlFor="add-category">Category</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Category Name"
                  id="add-category"
                />
                <label htmlFor="sub-categories">Sub Categories</label>
                <input
                  id="sub-categories"
                  className="form-control"
                  placeholder="eg:phones"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardEditCategory;
