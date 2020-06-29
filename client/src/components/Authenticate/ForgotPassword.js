import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { passwordReset } from "../../redux/actions";
import validator from "validator";
import FormField from "../Checkout/FormField";
import "../Account/Account.css";

export class ForgotPassword extends Component {
  render() {
    if (this.props.success) return <h3>{this.props.success}</h3>;
    return (
      <div>
        <h3>Reset your password</h3>

        <form
          onSubmit={this.props.handleSubmit(formValues =>
            this.props.passwordReset(formValues)
          )}
        >
          <p>
            To reset your password, enter the email address you use to sign in.
          </p>
          <Field type="text" name="email" label="Email" component={FormField} />
          <div style={{ color: "red", width: "400px" }}>
            {this.props.error && this.props.error}
          </div>
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-md btn-block address-btn mt-3"
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
              <span>Reset</span>
            )}
          </button>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (
    !formValues.email ||
    (formValues.email && !validator.isEmail(formValues.email.trim()))
  ) {
    errors.email = "Please enter a valid email";
  }
  return errors;
};
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    success: state.auth.success
  };
};
export default reduxForm({ validate, form: "ForgotPassword" })(
  connect(mapStateToProps, { passwordReset })(ForgotPassword)
);
