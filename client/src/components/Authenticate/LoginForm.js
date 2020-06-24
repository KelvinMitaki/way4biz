import React from "react";
import "./LoginForm.css";
import { reduxForm, Field } from "redux-form";
import LoginField from "./Field";
import validator from "validator";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(formValues =>
            console.log(formValues)
          )}
        >
          <Field
            type="text"
            name="email"
            label="Email"
            component={LoginField}
          />
          <Field
            type="password"
            name="password"
            label="Password"
            component={LoginField}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (
    !formValues.email ||
    (formValues.email.trim() && !validator.isEmail(formValues.email.trim()))
  ) {
    errors.email = "Please enter a valid email";
  }
  if (
    !formValues.password ||
    (formValues.password && formValues.password.trim().length < 6)
  ) {
    errors.password =
      "Please enter a password with a minimum of six characters";
  }
  return errors;
};

export default reduxForm({ validate, form: "LoginForm" })(LoginForm);
