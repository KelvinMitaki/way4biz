import React from "react";

import "./AdminDashBoardCategories.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";
import { fetchAllAdminCategories } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoardCategories extends React.Component {
  componentDidMount() {
    this.props.fetchAllAdminCategories();
  }
  render() {
    if (!this.props.adminCategories) return <ScreenLoader />;
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
              <Link
                to="/admin-category/add"
                className="btn btn-md add-category-btn"
              >
                Add Category
              </Link>
            </div>
            <div className="container">
              {/* mapping here */}
              {this.props.adminCategories.length !== 0 &&
                this.props.adminCategories.map(cat => (
                  <div
                    key={cat._id}
                    className="box-container admin-category-wrapper"
                  >
                    <div className="row p-3 align-items-center">
                      <div
                        className="col-md-4"
                        style={{ borderRight: "1px solid #d4d4d4" }}
                      >
                        <h4>{cat.category.main}</h4>
                      </div>
                      <div className="col-md-8">
                        <p>
                          {cat.category.subcategories.map((s, i) => {
                            if (cat.category.subcategories.length === i + 1) {
                              return (
                                <React.Fragment key={i}>
                                  <span>{s}</span>
                                </React.Fragment>
                              );
                            }
                            return (
                              <React.Fragment key={i}>
                                <span>{s}</span>,
                              </React.Fragment>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                    <div style={{ borderTop: "1px solid #d4d4d4" }}>
                      <div>
                        <Link
                          to="/admin-category/edit"
                          className="btn btn-lg btn-block edit-category-btn"
                        >
                          Edit Category
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    adminCategories: state.product.adminCategories
  };
};
export default connect(mapStateToProps, { fetchAllAdminCategories })(
  AdminDashBoardCategories
);
