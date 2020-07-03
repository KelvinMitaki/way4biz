import React from "react";

import "./Checkout.css";
import EditAddressSection from "./EditAddress";
import PaymentMethods from "./PaymentMethods";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import { withRouter, Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

class CheckOut extends React.Component {
  render() {
    if (this.props.cart.length === 0) {
      return <Redirect to="/" />;
    }
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header />
        <form
          onSubmit={this.props.handleSubmit(formValues =>
            console.log(formValues)
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
                  <p className="ml-3">How do you want to pay for your order?</p>
                  <PaymentMethods />
                  <div className="checkout-sub-total">
                    <div>
                      <p>Total</p>
                      <p>30,000</p>
                    </div>
                    <div>
                      <p>VAT</p>
                      <p>300</p>
                    </div>
                    <div>
                      <p>Shipping</p>
                      <p>1,500</p>
                    </div>
                    <hr />
                    <div>
                      <p>Total</p>
                      <p>31,800</p>
                    </div>
                    <div>
                      <button
                        disabled={this.props.invalid || this.props.pristine}
                        className="btn btn-md order-btn"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    cart: state.cartReducer.cart
  };
};
export default withRouter(
  reduxForm({ form: "Chekout" })(connect(mapStateToProps)(CheckOut))
);
