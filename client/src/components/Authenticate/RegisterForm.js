import React from "react";

import "./RegisterForm.css";
import { reduxForm, Field } from "redux-form";
import AuthField from "./AuthField";
import validator from "validator";

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(formValues => {
            console.log(formValues);
            this.props.handleSignInClick();
          })}
        >
          <Field
            type="text"
            name="firstName"
            label="First Name"
            component={AuthField}
          />
          <Field
            type="text"
            name="lastName"
            label="Last Name"
            component={AuthField}
          />
          <Field type="text" name="email" label="Email" component={AuthField} />
          <Field
            type="password"
            name="password"
            label="Password"
            component={AuthField}
          />
          <Field
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            component={AuthField}
          />
          <button
            style={{ cursor: "pointer" }}
            disabled={!this.props.valid}
            className="btn btn-md btn-block auth-btn mt-3"
            type="submit"
          >
            Register
          </button>
        </form>
        <br />
        <button className="btn btn-md btn-block mt-3 google" type="submit">
          Sign In With Google
        </button>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (
    !formValues.firstName ||
    (formValues.firstName && formValues.firstName.trim().length < 2)
  ) {
    errors.firstName = "Please enter a valid first name";
  }
  if (
    !formValues.lastName ||
    (formValues.lastName && formValues.lastName.trim().length < 2)
  ) {
    errors.lastName = "Please enter a valid last name";
  }
  if (
    !formValues.email ||
    (formValues.email && !validator.isEmail(formValues.email.trim()))
  ) {
    errors.email = "Please enter a valid email";
  }
  if (
    !formValues.password ||
    (formValues.password && formValues.password.trim().length < 6)
  ) {
    errors.password = "Your password must be atleast six characters";
  }
  if (formValues.confirmPassword !== formValues.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

export default reduxForm({ validate, form: "RegisterForm" })(RegisterForm);
