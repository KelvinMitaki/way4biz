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
    subcategories: [],
    typing: ""
  };
  componentDidMount() {
    this.props.fetchSingleCategory(
      this.props.match.params.categoryId,
      this.props.history
    );
  }
  handleTypingSubmit = e => {
    if (this.state.typing !== "") {
      return this.setState({
        subcategories: [...this.state.subcategories, this.state.typing],
        typing: ""
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.subcategories.length !== 0) {
      console.log({
        main: this.props.singleCategory.category.main,
        subcategories: [
          ...this.state.subcategories,
          ...this.props.singleCategory.category.subcategories
        ]
      });
    }
  };
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
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="add-category">Category</label>
                  <input
                    readOnly
                    className="form-control"
                    type="text"
                    placeholder="Category Name"
                    id="add-category"
                    value={
                      (Object.keys(this.props.singleCategory).length !== 0 &&
                        Object.keys(this.props.singleCategory.category)
                          .length !== 0 &&
                        this.props.singleCategory.category.main) ||
                      ""
                    }
                  />
                  <label htmlFor="sub-categories">Sub Categories</label>
                  <div className="input-group">
                    <input
                      name="typing"
                      type="text"
                      onChange={e => this.setState({ typing: e.target.value })}
                      className="form-control header-input-search"
                      placeholder="e.g iPhone"
                      value={this.state.typing}
                    />
                    <div
                      className="input-group-append"
                      onClick={this.handleTypingSubmit}
                    >
                      <button
                        id="header-search-btn"
                        disabled={this.state.typing === ""}
                      >
                        <div className="icon-container">
                          <span>Enter</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  {this.state.subcategories.length !== 0 &&
                    this.state.subcategories.map((sub, index) => (
                      <React.Fragment key={index}>
                        <p>
                          {sub}{" "}
                          <strong
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              this.setState({
                                subcategories: this.state.subcategories.filter(
                                  (s, i) => i !== index
                                )
                              })
                            }
                          >
                            X
                          </strong>
                        </p>
                      </React.Fragment>
                    ))}
                  {Object.keys(this.props.singleCategory).length !== 0 &&
                    Object.keys(this.props.singleCategory.category).length !==
                      0 &&
                    this.props.singleCategory.category.subcategories.length !==
                      0 &&
                    this.props.singleCategory.category.subcategories.map(
                      (s, i) => <p key={i}>{s}</p>
                    )}
                  <button
                    type="submit"
                    className="btn btn-md btn-primary"
                    disabled={this.state.subcategories.length === 0}
                  >
                    Add Category
                  </button>
                </form>
              </div>
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
