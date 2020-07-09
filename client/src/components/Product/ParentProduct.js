import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { fetchSingleProduct } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class ParentProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.productId !== prevProps.match.params.productId
    ) {
      this.props.fetchSingleProduct(this.props.match.params.productId);
    }
  }
  render() {
    return this.props.product && <Product key={this.props.location.key} />;
  }
}
const mapStateToProps = state => {
  return {
    product: state.product.product
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchSingleProduct })(ParentProduct)
);
