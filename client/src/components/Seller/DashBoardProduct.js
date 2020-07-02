import React from "react";

import "./DashBoardProduct.css";
import { connect } from "react-redux";

class DashBoardProduct extends React.Component {
  render() {
    if (this.props.sellerProducts.length !== 0) {
      return this.props.sellerProducts.map(product => (
        <React.Fragment key={product._id}>
          <div className="container">
            <div className="row">
              <div className="col d-flex dashboard-product-section box-container">
                <div id="dashboard-product-image" className="col col-lg-5">
                  <img src={product.imageUrl} />
                  <div className="ml-2">
                    <p>{product.name}</p>
                  </div>
                </div>
                <div id="dashboard-product-quantity" className="col col-lg-2">
                  {product.stockQuantity}
                </div>
                <div id="dashboard-product-price" className="col col-lg-2">
                  Ksh.{product.price}
                </div>
                <div id="dashboard-product-status" className="col col-lg-2">
                  Live
                </div>
                <div id="dashboard-product-edit" className="col col-lg-1">
                  Edit
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ));
    }
    return null;
  }
}
const mapStateToProps = state => {
  return {
    sellerProducts: state.sellerRegister.sellerProducts
  };
};
export default connect(mapStateToProps)(DashBoardProduct);
