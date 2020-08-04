import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { makeOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class StripePaymentButton extends Component {
  render() {
    // INCLUDE VAT
    const priceArr = this.props.cart.map(item => item.price * item.quantity);
    const amount = priceArr.reduce((acc, cur) => acc + cur, 0);
    return (
      <StripeCheckout
        name="Way4Biz"
        amount={amount * 100}
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
        <button className="btn btn-md initiate-payment">
          Initiate Payment
        </button>
      </StripeCheckout>
    );
  }
}

export default withRouter(connect(null, { makeOrder })(StripePaymentButton));
