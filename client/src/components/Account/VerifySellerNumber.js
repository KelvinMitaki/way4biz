import React, { Component } from "react";
import AuthHeader from "../Authenticate/AuthHeader";
import { reduxForm, Field } from "redux-form";
import validator from "validator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VerificationField from "./VerificationField";

export class VerifySellerNumber extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <AuthHeader />
        <br />
        <br />
        <br />
        <h2>VERIFY YOUR PHONE NUMBER</h2>
        <br />
        <p>Please enter the code that was sent to</p>
        <br />
        <form>
          <Field
            type="text"
            name="code"
            label="VERIFICATION CODE"
            component={VerificationField}
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
              <span>Verify And Continue</span>
            )}
          </button>
          <br />
          <p
            style={{ textAlign: "center" }}
            className="forgot-password-link-wrapper"
          >
            <Link style={{ color: "#f76b1a" }} to="/confirm/phoneNumber">
              Change Phone Number
            </Link>
          </p>
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
