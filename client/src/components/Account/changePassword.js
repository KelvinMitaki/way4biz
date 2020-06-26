import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AuthField from "../Authenticate/AuthField";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import FormField from "../Checkout/FormField";

export class ChangePassword extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div
              className="col-md-9 my-5 mx-auto box-container"
              id="address-form"
            >
              <h3 className="legend">Change Password</h3>
              <hr />
              <form
                onSubmit={this.props.handleSubmit(formValues => {
                  console.log(formValues);
                  return this.props.history.push("/");
                })}
              >
                <Field
                  type="password"
                  name="currentPassword"
                  label="Current Password"
                  component={FormField}
                />
                <Field
                  type="password"
                  name="newPassword"
                  label="New Password"
                  component={FormField}
                />
                <Field
                  type="password"
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  component={FormField}
                />
                <button
                  style={{ cursor: "pointer" }}
                  className="btn btn-md  auth-btn btn-block mt-3"
                  disabled={this.props.invalid}
                  type="submit"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (
    !formValues.currentPassword ||
    (formValues.currentPassword && formValues.currentPassword.length < 6)
  ) {
    errors.currentPassword = "Please enter a valid password";
  }
  if (
    !formValues.newPassword ||
    (formValues.newPassword && formValues.newPassword.length < 6)
  ) {
    errors.newPassword = "Your password must be atleast six characters";
  }
  if (formValues.confirmNewPassword !== formValues.newPassword) {
    errors.confirmNewPassword = "Passwords do not patch";
  }
  return errors;
};

export default reduxForm({ validate, form: "ChangePassword" })(ChangePassword);
