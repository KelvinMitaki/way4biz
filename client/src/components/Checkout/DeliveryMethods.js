import React from "react";

import "./DeliveryMethods.css";
import { Field } from "redux-form";
import RadioField from "./RadioField";

class DeliveryMethods extends React.Component {
  render() {
    return (
      <div className="ml-3 mt-3">
        <div className="delivery">
          <Field
            type="radio"
            label="Normal Delivery"
            name="delivery"
            value="normal"
            id="radio-1000"
            component={RadioField}
          />

          <div>
            <p>With normal delivery goods will reach to you in 3-7 days. </p>
          </div>
        </div>
        <div className="delivery">
          <Field
            type="radio"
            label="Express Delivery"
            name="delivery"
            value="express"
            id="radio-1100"
            component={RadioField}
          />

          <div>
            <p>With this delivery method goods will reach to you in 24hrs.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryMethods;
