import React from "react";

import "./PaymentMethods.css";

class PaymentMethods extends React.Component {
  render() {
    return (
      <div className="ml-3 mt-3">
        <div className="payment" id="mpesa">
          <div className="payment-title-button">
            <input type="radio" value="mpesa" name="payment-method" />
            <h5 className="ml-2">Mpesa</h5>
          </div>

          <div className="payment-method-info">
            <div>
              <img src="mpesa.png" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac turpis egestas. At erat
              pellentesque adipiscing commodo elit at. Quis lectus nulla at
              volutpat. Felis eget nunc lobortis mattis.
            </p>
          </div>
        </div>
        <div className="payment" id="debit">
          <div className="payment-title-button">
            <input type="radio" value="card" name="payment-method" />
            <h5 className="ml-2">Debit Card/Credit Card</h5>
          </div>
          <div className="payment-method-info">
            <div>
              <img src="debit.png" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac turpis egestas. At erat
              pellentesque adipiscing commodo elit at. Quis lectus nulla at
              volutpat. Felis eget nunc lobortis mattis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
