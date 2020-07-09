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
    return (
      <React.Fragment>
        {this.props.categoryProductCount !== null && <Products />}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { categoryProductCount: state.product.categoryProductCount };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory })(ProductParent)
);
