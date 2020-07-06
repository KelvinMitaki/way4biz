import React from "react";
import Tabs from "react-responsive-tabs";

import "./ProductSecondaryDetails.css";
import ProductFeaturesSpecifications from "./ProductFeaturesSpecifications";
import ProductCustomerReviews from "./ProductCustomerReviews";

class ProductSecondaryDetails extends React.Component {
  state = {
    productTabs: [
      {
        name: "Features & Specifications",
        data: <ProductFeaturesSpecifications data={this.props.details} />
      },
      {
        name: "Customer Reviews",
        data: <ProductCustomerReviews data={this.props.specifications} />
      }
    ]
  };

  getTabs = () => {
    let { productTabs } = this.state;
    return productTabs.map((productTab, index) => ({
      title: productTab.name,
      getContent: () => productTab.data,
      key: index,
      tabClassName: "tab",
      panelClassName: "panel"
    }));
  };
  render() {
    return (
      <div>
        <Tabs
          items={this.getTabs()}
          transformWidth={540}
          transform={true}
          showMoreLabel={"More..."}
          showInkBar={true}
        />
      </div>
    );
  }
}

export default ProductSecondaryDetails;
