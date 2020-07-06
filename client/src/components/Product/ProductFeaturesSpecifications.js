import React from "react";

class ProductFeaturesSpecifications extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ width: "100%" }}>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProductFeaturesSpecifications;
