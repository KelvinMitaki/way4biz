import React from "react";

import "./PaymentMethods.css";
import { Field } from "redux-form";
import RadioField from "./RadioField";

class PaymentMethods extends React.Component {
  render() {
    return (
      <div className="ml-3 mt-3">
        <div className="payment" id="mpesa">
          <Field
            type="radio"
            label="Mpesa"
            name="payment"
            value="mpesa"
            component={RadioField}
          />

          <div className="payment-method-info">
            <div>
              <img src="mpesa.png" alt="m-pesa" />
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
          <Field
            type="radio"
            label="Debit Card/Credit Card"
            name="payment"
            value="debit/credit"
            component={RadioField}
          />

          <div className="payment-method-info">
            <div>
              <img src="debit.png" alt="debit" />
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
