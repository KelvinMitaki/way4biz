import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class StripePayment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Way4Biz"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE}
        currency="KES"
        email="kevinkhalifa911@gmail.com"
      />
    );
  }
}

export default StripePayment;
