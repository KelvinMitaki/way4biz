import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardProduct.css";

class DashBoardProduct extends React.Component {
  render() {
    return (
      <div className="container-fluid p-4" style={{ backgroundColor: "white" }}>
        <div className="row no-gutters y">
          <div className="col d-flex mb-2">
            <h6 className="col-lg-5 p-0" style={{ textAlign: "left" }}>
              Item
            </h6>
            <h6 className="col-lg-2 p-0">Quantity</h6>
            <h6 className="col-lg-2 p-0">Price</h6>
            <h6 className="col-lg-2 p-0">Status</h6>
            <h6 className="col-lg-1 p-0"> </h6>
          </div>
        </div>
        <div className="container-fluid p-0">
          <input
            type="text"
            placeholder="Search product..."
            className="mt-2 mb-3"
          />
          {this.props.products &&
            this.props.products.length !== 0 &&
            this.props.products.map((product) => (
              <div
                key={product._id}
                className="row no-gutters dashboard-product-wrapper box-container"
              >
                <div className="col-md-12 col-lg-5 dashboard-product-image">
                  <img src={product.imageUrl} alt={product.name} />
                  <p className="seller-db-prod-name mr-3 w-100">
                    <Link to={`/product/${product._id}`} title={product.name}>
                      {product.name}
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 col-lg-2">
                  <p className="x mr-2">
                    <strong>Qty:</strong>
                  </p>
                  <p>{product.stockQuantity}</p>
                </div>
                <div className="col-md-6 col-lg-2">
                  <p className="x mr-2">
                    <strong>Price:</strong>
                  </p>
                  <p>Ksh.{product.price.toLocaleString()} </p>
                </div>
                <div className="col-md-6 col-lg-2">
                  <p className="x mr-2">
                    <strong>Status:</strong>
                  </p>
                  <p className="live">Live</p>
                </div>
                <div className="col-md-6 col-lg-1">
                  <Link
                    to={`/seller/edit/${product._id}`}
                    className="btn btn-sm btn-danger"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default DashBoardProduct;
