import React from "react";

class ProductCustomerReviews extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProductCustomerReviews;
