import React from "react";
import "./LoginForm.css";
import { reduxForm, Field } from "redux-form";
import FormField from "./Field";
import validator from "validator";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit((formValues) => {
            this.props.history.push("/");
            return this.props.logIn(formValues);
          })}
        >
          <Field type="text" name="email" label="Email" component={FormField} />
          <Field
            type="password"
            name="password"
            label="Password"
            component={FormField}
          />
          <button
            disabled={!this.props.valid}
            className="btn btn-md btn-block auth-btn"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
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

export default withRouter(
  connect(null, { logIn })(
    reduxForm({ validate, form: "LoginForm" })(LoginForm)
  )
);
