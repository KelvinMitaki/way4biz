import React from "react";

import "./AdminDashBoardAddCategory.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons/lib";
import { AiOutlineSearch } from "react-icons/ai";

class AdminDashBoardAddCategory extends React.Component {
  state = {
    subcategories: [],
    typing: ""
  };
  handleChange = e => {
    this.setState({ typing: e.target.value });
  };
  handleTypingSubmit = e => {
    if (this.state.typing !== "") {
      return this.setState({
        subcategories: [...this.state.subcategories, this.state.typing],
        typing: ""
      });
    }
  };
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
                <label htmlFor="add-category">Category</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Category Name"
                  id="add-category"
                />
                <label htmlFor="sub-categories">Sub Categories</label>
                <div className="input-group">
                  <input
                    type="text"
                    onChange={this.handleChange}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardAddCategory;
