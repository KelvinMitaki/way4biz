import React from "react";

class ProductCustomerReviews extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", backgroundColor: "#fff", padding: "10px" }}>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProductCustomerReviews;
