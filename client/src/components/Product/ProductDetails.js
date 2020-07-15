import React from "react";
import renderHTML from "react-render-html";
class ProductDetails extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", backgroundColor: "#fff", padding: "10px" }}>
        <p dangerouslySetInnerHTML={{ __html: this.props.data }} />
      </div>
    );
  }
}

export default ProductDetails;
