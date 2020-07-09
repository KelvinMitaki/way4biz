import React, { Component } from "react";
import { connect } from "react-redux";
import { singleCategory } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import Products from "./Products";

export class ProductParent extends Component {
  componentDidMount() {
    this.props.singleCategory(
      this.props.match.params.category,
      this.props.history
    );
  }
  render() {
    console.log("parent", this.props.singleCategoryProducts.length);
    return (
      <React.Fragment>
        {this.props.categoryProductCount !== null && (
          <Products
            length={this.props.singleCategoryProducts.length}
            key={this.props.location.key}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    categoryProductCount: state.product.categoryProductCount,
    singleCategoryProducts: state.product.singleCategoryProducts
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory })(ProductParent)
);
