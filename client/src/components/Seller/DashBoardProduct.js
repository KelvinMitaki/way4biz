import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardProduct.css";
import Image from "../Market/Image";

class DashBoardProduct extends React.Component {
  state = {
    search: null
  };
  onSearchChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const test =
      this.props.products &&
      this.props.products.length !== 0 &&
      this.props.products.filter(product => {
        return product.name
          .toLowerCase()
          .includes(this.state.search && this.state.search.toLowerCase());
      });

    return (
      <div
        className="container"
        style={{ backgroundColor: "white", padding: "10px" }}
      >
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
          <div className="form-group ">
            <input
              type="text"
              placeholder="Search product..."
              className="mt-2 mb-3 form-control search-2"
              name="search"
              onChange={this.onSearchChange}
            />
          </div>

          {this.props.products &&
            !this.state.search &&
            this.props.products.length !== 0 &&
            this.props.products.map(product => (
              <div
                key={product._id}
                className="row no-gutters dashboard-product-wrapper box-container"
              >
                <div className="col-md-12 col-lg-5 dashboard-product-image">
                  <Image
                    height="120vh"
                    width="120vw"
                    image={
                      product.imageUrl[0].includes("http")
                        ? product.imageUrl[0]
                        : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl[0]} `
                    }
                    alt={product.name}
                  />
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
          {test &&
            test.length !== 0 &&
            test.map(product => (
              <div
                key={product._id}
                className="row no-gutters dashboard-product-wrapper box-container"
              >
                <div className="col-md-12 col-lg-5 dashboard-product-image">
                  <img
                    src={
                      product.imageUrl[0].includes("http")
                        ? product.imageUrl[0]
                        : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl[0]} `
                    }
                    alt={product.name}
                  />
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
