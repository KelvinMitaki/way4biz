import React from "react";
import "./MyCart.css";
import QuantityCounter from "./QuantityCounter";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFromCart } from "../../redux/actions";
import { IconContext } from "react-icons";
import { FaTrashAlt, FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
              {this.props.cart.map((item) => (
                <React.Fragment key={item._id}>
                  <div className="row box-container">
                    <div className="col-12">
                      {/* <div className="container"> */}
                      <div className="row no-gutters cart-product-details">
                        <div className="col-5 col-md-6">
                          <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="price-title col-7 col-md-6">
                          <p
                            className="store-name"
                            style={{ fontWeight: "bold" }}
                          >
                            Seller:{item.seller.storeName}
                          </p>
                          <p
                            className="product-name"
                            style={{ fontWeight: "bolder" }}
                          >
                            {item.name}
                          </p>
                          <p>Price: ksh.{item.price.toLocaleString()}</p>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>

                    <div className="col-12 d-flex secondary-details">
                      <div>
                        <QuantityCounter quantity={item.quantity} item={item} />
                      </div>
                      <div>
                        <p>
                          Ksh.{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      <div id="remove-cart">
                        <IconContext.Provider
                          value={{ className: "icon icon-trash mr-1 " }}
                        >
                          <div className="icon-container">
                            <FaTrashAlt />
                            <span
                              className="remove-text"
                              onClick={() => this.props.deleteFromCart(item)}
                            >
                              Remove
                            </span>
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="col5">
            <div id="cart-total-checkout" className="box-container">
              <h3>Order Summary</h3>

              <div className="my-5">
                <div className="total">
                  <strong>Total</strong>
                  <p>
                    Ksh.
                    {this.props.cart
                      .map((item) => item.price * item.quantity)
                      .reduce((acc, curr) => acc + curr, 0)
                      .toLocaleString()}
                  </p>
                </div>
                <div className="shipping">
                  <strong>Shipping</strong>
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
    return (
      <div className="container-fluid no-items-in-cart">
        <IconContext.Provider value={{ className: "empty-cart-icon" }}>
          <FaOpencart />
        </IconContext.Provider>
        <p className="mt-3">
          No items in your cart. Proceed to shopping and add some items in your
          cart. Your cart items will appear here.
        </p>
        <Link to="/" className="btn btn-lg empty-cart-to-shop-btn my-3">
          Proceed To Shopping
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};
export default withRouter(connect(mapStateToProps, { deleteFromCart })(MyCart));
