import React from "react";

import "./HeroCategories.css";
import { connect } from "react-redux";

class HeroCategories extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="category-head">
          <h3>Categories</h3>
        </div>
        <ul className="category">
          <li>All Categories</li>
          {this.props.categories.length !== 0 &&
            this.props.categories.map(category => (
              <li key={category._id}>{category._id}</li>
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
export default connect(mapStateToProps)(HeroCategories);
