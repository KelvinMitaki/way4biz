import React, { Component } from "react";
import { connect } from "react-redux";
import { singleCategory } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import Products from "./Products";
import ScreenLoader from "../Pages/ScreenLoader";

export class ProductParent extends Component {
  componentDidMount() {
    this.props.singleCategory(
      this.props.match.params.category,
      this.props.history
    );
  }
  render() {
    if (this.props.singleCategoryLoading) return <ScreenLoader />;
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
    singleCategoryProducts: state.product.singleCategoryProducts,
    singleCategoryLoading: state.auth.singleCategoryLoading
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory })(ProductParent)
);
