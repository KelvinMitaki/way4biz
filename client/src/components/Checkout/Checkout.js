import React from "react";

import "./Checkout.css";
import EditAddressSection from "./EditAddress";
import PaymentMethods from "./PaymentMethods";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import { withRouter, Redirect } from "react-router-dom";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { fetchProducts, preMakeOrder } from "../../redux/actions";

class CheckOut extends React.Component {
  componentDidMount() {
    if (!this.props.distance || this.props.cart.length === 0) {
      return <Redirect to="/address" />;
    }
  }
  render() {
    if (this.props.cart.length === 0) {
      this.props.fetchProducts();
      return <Redirect to="/" />;
    }
    const { user, cart } = this.props;
    const VAT = Math.ceil(
      this.props.cart
        .map(item => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0) * 0.01
    ).toLocaleString();
    const shipping = Math.floor(Math.random() * 5000).toLocaleString();
    const total = this.props.cart
      .map(item => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0)
      .toLocaleString();
    return (
      <div className="main">
        <div className="content">
          <Header />

          <form
            onSubmit={this.props.handleSubmit(formValues =>
              this.props.preMakeOrder({ formValues, cart }, this.props.history)
            )}
          >
            <div className="container main-checkout-wrapper">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div id="address-details" className="mb-3 box-container">
                    <h3>Address Details</h3>
                    <hr />
                    <div id="current-address">
                      <h6>
                        {user.firstName} {user.lastName}
                      </h6>
                      <p>
                        {user.address} / {user.town} / {user.city}
                      </p>
                      <p> +254{user.phoneNumber}</p>
                    </div>
                    <EditAddressSection />
                    <br />
                  </div>
                  <div id="payment-methods" className="box-container">
                    <h3>Payment Methods</h3>
                    <hr />
                    <p className="ml-3">
                      How do you want to pay for your order?
                    </p>
                    <PaymentMethods />
                    <div className="checkout-sub-total">
                      <div>
                        <p>Total</p>
                        <p>{total}</p>
                      </div>
                      <div>
                        <p>VAT</p>
                        <p>{VAT}</p>
                      </div>
                      <div>
                        <p>Shipping</p>
                        <p>
                          {Math.round(
                            this.props.distance.shippingFees
                          ).toLocaleString()}
                        </p>
                      </div>
                      <hr />
                      <div>
                        <p>Total</p>
                        <p>
                          {(
                            parseInt(total.replace(",", "")) +
                            parseInt(VAT) +
                            parseInt(shipping)
                          ).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <button
                          // check which payment method is choosen and do the routing
                          className="btn btn-md order-btn"
                          disabled={
                            !this.props.valid ||
                            this.props.loading ||
                            this.props.pristine ||
                            !this.props.payment
                          }
                          type="submit"
                        >
                          {this.props.loading && (
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          {this.props.loading ? (
                            <span> {"  "}Loading...</span>
                          ) : (
                            <span>Order Now</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const selector = formValueSelector("Chekout");
const mapStateToProps = state => {
  const payment = selector(state, "payment");
  return {
    user: state.auth.user,
    cart: state.cartReducer.cart,
    loading: state.auth.loading,
    distance: state.detailsPersist.distance,
    payment
  };
};
export default withRouter(
  reduxForm({ form: "Chekout", destroyOnUnmount: false })(
    connect(mapStateToProps, { preMakeOrder, fetchProducts })(CheckOut)
  )
);
