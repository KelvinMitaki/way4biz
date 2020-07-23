import React from "react";
import { reduxForm, Field } from "redux-form";
import "./AdminDashBoardAddCategory.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoardAddCategory extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container mt-4">
          <div className="box-container">
            <h3 className="my-2" style={{ textAlign: "center" }}>
              Add Category
            </h3>
            <div className="container">
              <div className="form-group">
                <Field
                  type="text"
                  name="firstName"
                  label="Category"
                  component={FormField}
                />
                <Field
                  type="text"
                  name="firstName"
                  label="Sub Categories"
                  component={FormField}
                />
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

export default reduxForm({ validate, form: "AdminDashBoardAddCategory" })(
  AdminDashBoardAddCategory
);
