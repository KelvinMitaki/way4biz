import React from "react";
import "./MyCart.css";
import QuantityCounter from "./QuantityCounter";
import { withRouter } from "react-router-dom";

class MyCart extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="cart-wrapper">
        <div className="col7">
          <div className="container  cart-product">
            <div className="row">
              <div className="cart-header box-container col-12 ">
                <h3>Cart(2)</h3>
              </div>
            </div>
            <div className="row box-container mb-5">
              <div className="col-12">
                <div className="container">
                  <div className="row cart-product-details">
                    <img
                      src="product-imgs/1.jpg"
                      className="col col-md-6 mr -md-4"
                    />
                    <div className="price-title my-auto col col-md-6">
                      <p>Seller:LG</p>
                      <h3>Product Name</h3>
                      <h6>Unit Price: ksh.30,000</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex secondary-details">
                <div>
                  <QuantityCounter />
                </div>
                <div>
                  <p>Ksh.30,000</p>
                </div>
                <div id="remove-cart">
                  <i className="fa fa-trash mr-1"></i>
                  <span className="remove-text">Remove</span>
                </div>
              </div>
            </div>

            <div className="row box-container mb-5">
              <div className="col-12">
                <div className="container">
                  <div className="row cart-product-details">
                    <img src="product-imgs/1.jpg" className="col col-md-6" />
                    <div className="price-title my-auto col col-md-6">
                      <p>Seller:LG</p>
                      <h3>Product Name</h3>
                      <h6>Unit Price: ksh.30,000</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex secondary-details">
                <div>
                  <QuantityCounter />
                </div>
                <div>
                  <p>Ksh.30,000</p>
                </div>
                <div id="remove-cart">
                  <i className="fa fa-trash mr-1"></i>
                  <span className="remove-text">Remove</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col5">
          <div id="cart-total-checkout" className="box-container">
            <h3>Order Summary</h3>

            <div className="my-5">
              <div className="total">
                <p>Total</p>
                <p>Ksh.30,000</p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>Shipping fees not yet included</p>
              </div>
            </div>
            <button
              onClick={() => this.props.history.push("/address")}
              className="btn checkout-btn mb-3 btn-md btn-block"
            >
              Proceed To Checkout
            </button>
            <button className="btn shopping-btn btn-md btn-block">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyCart);
