import React from "react";
import "./LoginForm.css";
import { reduxForm, Field } from "redux-form";
import AuthField from "./AuthField";
import validator from "validator";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div style={{ color: "red", width: "400px" }}>
          {this.props.error && this.props.error}
        </div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(formValues => {
            return this.props.logIn(formValues, this.props.history);
          })}
        >
          <Field type="text" name="email" label="Email" component={AuthField} />
          <Field
            type="password"
            name="password"
            label="Password"
            component={AuthField}
          />
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-md btn-block auth-btn mt-3"
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
              <span>Login</span>
            )}
          </button>
        </form>
        <br />
        <p>
          <Link style={{ color: "#f76b1a" }} to="/">
            Forgot password?
          </Link>
        </p>
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
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading
  };
};
export default withRouter(
  reduxForm({ validate, form: "LoginForm" })(
    connect(mapStateToProps, { logIn })(LoginForm)
  )
);
