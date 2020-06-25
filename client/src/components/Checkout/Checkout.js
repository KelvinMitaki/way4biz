import React from "react";

import "./Checkout.css";
import EditAddressSection from "./EditAddress";
import PaymentMethods from "./PaymentMethods";

class CheckOut extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div id="address-details" className="mb-3">
              <h3>Address Details</h3>
              <hr />
              <div id="current-address">
                <p>Helloo</p>
                <p>Helloo</p>
                <p>Helloo</p>
              </div>
              <EditAddressSection />
            </div>
            <div id="payment-methods">
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
                  <button className="btn btn-md order-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
