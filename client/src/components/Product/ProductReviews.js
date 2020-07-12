import React from "react";
import Rating from "./Rating";

import "./ProductReviews.css";
import { connect } from "react-redux";

class ProductReviews extends React.Component {
  render() {
    return (
      <div style={{ borderTop: "1px solid #d4d4d4" }}>
        {/* mapping here */}
        {this.props.productReviews.length !== 0 &&
          this.props.productReviews.map(prod => (
            <div className="buyer-review-wrapper">
              <Rating size={15} clickable={false} value={5} />
              <p>
                The quick brown fox jumped over the lazy dog. The quick brown
                fox jumped over the lazy dog. The quick brown fox jumped over
                the lazy dog. The quick brown fox jumped over the lazy dog.
              </p>
              <p className="my-2">
                By Fred
                <span className="ml-2">on 1/1/001</span>
              </p>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productReviews: state.product.productReviews
  };
};
export default connect(mapStateToProps)(ProductReviews);
