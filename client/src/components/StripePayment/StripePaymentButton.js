import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { makeOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class StripePaymentButton extends Component {
  state = {
    open: false,
    clicked: false
  };
  render() {
    // INCLUDE VAT
    const priceArr = this.props.cart.map(item => item.price * item.quantity);
    const amount = priceArr.reduce((acc, cur) => acc + cur, 0);

    return (
      <StripeCheckout
        opened={() => this.setState({ open: true, clicked: false })}
        closed={() => this.setState({ open: false })}
        name="Way4Biz"
        amount={(amount + Math.round(this.props.distance.shippingFees)) * 100}
        token={token =>
          this.props.makeOrder(
            {
              ...this.props.order,
              ...token
            },
            this.props.history
          )
        }
        stripeKey={process.env.REACT_APP_STRIPE}
        currency="KES"
        email={this.props.email}
        locale="en"
      >
        <button
          className="btn btn-md initiate-payment"
          onClick={() => this.setState({ clicked: true })}
        >
          {!this.state.open && this.state.clicked && (
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {!this.state.open && this.state.clicked ? (
            <span> {"  "}Loading...</span>
          ) : (
            <span>Initiate Payment</span>
          )}
        </button>
      </StripeCheckout>
    );
  }
}

export default withRouter(connect(null, { makeOrder })(StripePaymentButton));
