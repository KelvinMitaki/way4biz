import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { fetchSingleProduct } from "../../redux/actions";

export class ParentProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }
  render() {
    return this.props.product && <Product />;
  }
}
const mapStateToProps = state => {
  return {
    product: state.product.product
  };
};
export default connect(mapStateToProps, { fetchSingleProduct })(ParentProduct);
