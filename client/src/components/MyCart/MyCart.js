import React from "react";
import "./MyCart.css";
import QuantityCounter from "./QuantityCounter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MyCart extends React.Component {
  render() {
    if (this.props.cart.length !== 0) {
      return (
        <div className="cart-wrapper">
          <div className="col7">
            <div className="container  cart-product">
              <div className="row">
                <div className="cart-header box-container col-12 ">
                  <h3>Cart({this.props.cart.length})</h3>
                </div>
              </div>
              {this.props.cart.map(item => (
                <React.Fragment key={item._id}>
                  <div className="row box-container mb-5">
                    <div className="col-12">
                      <div className="container">
                        <div className="row cart-product-details">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="col col-md-6 mr -md-4"
                          />
                          <div className="price-title my-auto col col-md-6">
                            <h6>Seller:{item.seller} </h6>
                            <h5 className="product-name">{item.name}</h5>
                            <p>Price: ksh.{item.price.toLocaleString()} </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex secondary-details">
                      <div>
                        <QuantityCounter />
                      </div>
                      <div>
                        <p>Ksh.{item.price.toLocaleString()} </p>
                      </div>
                      <div id="remove-cart">
                        <i className="fa fa-trash mr-1"></i>
                        <span className="remove-text">Remove</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <h1 style={{ width: "10px" }}></h1>
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
                className="btn checkout-button mb-3 btn-md btn-block"
              >
                Proceed To Checkout
              </button>
              <button
                onClick={() => this.props.history.push("/")}
                className="btn shopping-btn btn-md btn-block"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <h2>No Items In Your Cart</h2>;
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};
export default withRouter(connect(mapStateToProps)(MyCart));
