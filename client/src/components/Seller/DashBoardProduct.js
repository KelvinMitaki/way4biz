import React from "react";
import { Link } from "react-router-dom";

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
                  <img src={product.imageUrl} alt={product.name} />
                  <div className="ml-2">
                    <p>{product.name}</p>
                  </div>
                </div>
                <div id="dashboard-product-quantity" className="col col-lg-2">
                  {product.stockQuantity}
                </div>
                <div id="dashboard-product-price" className="col col-lg-2">
                  Ksh.{product.price.toLocaleString()}
                </div>
                <div id="dashboard-product-status" className="col col-lg-2">
                  <p
                    className="bg-success"
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      borderRadius: "3px"
                    }}
                  >
                    Live
                  </p>
                </div>
                <div id="dashboard-product-edit" className="col col-lg-1">
                  <Link to="/seller/sell" className="btn btn-sm btn-danger">
                    Edit
                  </Link>
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
