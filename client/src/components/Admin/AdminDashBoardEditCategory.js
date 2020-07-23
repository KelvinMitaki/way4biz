import React from "react";
import "./AdminDashBoardEditCategory.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { withRouter } from "react-router-dom";
import { fetchSingleCategory } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoardEditCategory extends React.Component {
  state = {
    subcategories: []
  };
  componentDidMount() {
    this.props.fetchSingleCategory(
      this.props.match.params.categoryId,
      this.props.history
    );
  }
  render() {
    if (!this.props.singleCategory) return <ScreenLoader />;
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
                  readOnly
                  className="form-control"
                  type="text"
                  placeholder="Category Name"
                  id="add-category"
                  value={
                    (Object.keys(this.props.singleCategory).length !== 0 &&
                      Object.keys(this.props.singleCategory.category).length !==
                        0 &&
                      this.props.singleCategory.category.main) ||
                    ""
                  }
                />
                <label htmlFor="sub-categories">Sub Categories</label>
                <input
                  id="sub-categories"
                  className="form-control"
                  placeholder="eg:phones"
                />
              </div>
              {Object.keys(this.props.singleCategory).length !== 0 &&
                Object.keys(this.props.singleCategory.category).length !== 0 &&
                this.props.singleCategory.category.subcategories.length !== 0 &&
                this.props.singleCategory.category.subcategories.map((s, i) => (
                  <p key={i}>{s}</p>
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
    singleCategory: state.product.singleCategory
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchSingleCategory })(AdminDashBoardEditCategory)
);
