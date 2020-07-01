import React, { Component } from "react";
import AuthHeader from "../Authenticate/AuthHeader";
import { reduxForm, Field } from "redux-form";
import validator from "validator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PhoneNumber from "./PhoneNumber";

export class VerifySellerNumber extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <br />
        <h2>VERIFY YOUR PHONE NUMBER</h2>
        <p>Please enter the code that was sent to</p>
        <form>
          <Field
            type="text"
            name="code"
            label="VERIFICATION CODE"
            component={PhoneNumber}
          />
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-md btn-block primary-button mt-3"
            disabled={!this.props.valid || this.props.loading}
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
              <span>Send SMS</span>
            )}
          </button>
          <br />
          <Link to="/confirm/phoneNumber">Change My Phone Number</Link>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (
    !formValues.code ||
    (formValues.code && !validator.isNumeric(formValues.code))
  ) {
    errors.code = "Please enter a valid code";
  }
  if (formValues.code && formValues.code.length !== 6) {
    errors.code = "Please enter a valid code";
  }
  return errors;
};
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};
export default connect(mapStateToProps)(
  reduxForm({ validate, form: " VerifySellerNumber" })(VerifySellerNumber)
);
