import React from "react";
import "./LoginForm.css";
import { reduxForm, Field } from "redux-form";
import LoginField from "./Field";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <Field
            type="email"
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
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "LoginForm" })(LoginForm);
