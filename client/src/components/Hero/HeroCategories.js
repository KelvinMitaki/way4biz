import React from "react";

import "./HeroCategories.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { singleCategory, fetchAllCategories } from "../../redux/actions";

class HeroCategories extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="category-head">
          <h3>Categories</h3>
        </div>
        <ul className="categories">
          <li>
            <Link
              to="/categories"
              onClick={() => this.props.fetchAllCategories()}
              style={{ color: "#000" }}
            >
              All Categories
            </Link>
          </li>
          {this.props.categories.length !== 0 &&
            this.props.categories.map(category => (
              <li
                key={category._id}
                onClick={() =>
                  this.props.singleCategory(category._id, this.props.history)
                }
              >
                {category._id}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.product.categories
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory, fetchAllCategories })(
    HeroCategories
  )
);
