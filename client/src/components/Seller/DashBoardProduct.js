import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardProduct.css";
import { connect } from "react-redux";

class DashBoardProduct extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
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
        <div className="row no-gutters dashboard-product-wrapper box-container">
          {/* mapping will take place here */}
          <div className="col-md-12 col-lg-5 dashboard-product-image">
            <img src="/1.jpg" />
            <p className="seller-db-prod-name mr-3 w-100">
              <Link to="/" title="Title Here">
                Great Beer Great Beer Great Beer Great Beer Great Beer Great
                Beer Great Beer
              </Link>
            </p>
          </div>
          <div className="col-md-6 col-lg-2">
            <p className="x mr-2">
              <strong>Qty:</strong>
            </p>
            <p>10</p>
          </div>
          <div className="col-md-6 col-lg-2">
            <p className="x mr-2">
              <strong>Price:</strong>
            </p>
            <p>Ksh.10,000</p>
          </div>
          <div className="col-md-6 col-lg-2">
            <p className="x mr-2">
              <strong>Status:</strong>
            </p>
            <p className="live">Live</p>
          </div>
          <div className="col-md-6 col-lg-1">
            <Link to="/" className="btn btn-sm btn-danger">
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sellerProducts: state.sellerRegister.sellerProducts,
  };
};
export default connect(mapStateToProps)(DashBoardProduct);
