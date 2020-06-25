import React from "react";

import "./PaymentMethods.css";

class PaymentMethods extends React.Component {
  render() {
    return (
      <div className="ml-3 mt-3">
        <div className="payment" id="mpesa">
          <div className="payment-title-button">
            <input type="radio" value="mpesa" name="payment-method" />
            <p className="ml-2">Mpesa</p>
          </div>
        </div>
        <div className="payment" id="paypal">
          <div className="payment-title-button">
            <input type="radio" value="paypal" name="payment-method" />
            <p className="ml-2">Stripe</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
