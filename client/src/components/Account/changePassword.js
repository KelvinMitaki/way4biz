import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AuthField from "../Authenticate/AuthField";

export class changePassword extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-9 my-5 mx-auto box-container"
            id="address-form"
          >
            <h3 className="legend">Change Password</h3>
            <hr />
            <form
              onSubmit={this.props.handleSubmit(formValues =>
                console.log(formValues)
              )}
            >
              <Field
                type="password"
                name="currentPassword"
                label="Current Password"
                component={AuthField}
              />
              <Field
                type="password"
                name="newPassword"
                label="New Password"
                component={AuthField}
              />
              <Field
                type="password"
                name="confirmNewPassword"
                label="Confirm New Password"
                component={AuthField}
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

export default reduxForm({ validate, form: "changePassword" })(changePassword);
