import React from "react";
import "./ProductDetails.css";
class ProductDetails extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", backgroundColor: "#fff", padding: "10px" }}>
        <p
          className="dangerous-stuff"
          dangerouslySetInnerHTML={{ __html: this.props.data }}
          style={{ width: "100% !important", overflow: "hidden" }}
        />
      </div>
    );
  }
}

export default ProductDetails;
