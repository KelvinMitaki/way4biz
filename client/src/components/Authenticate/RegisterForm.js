import React from "react";

import "./RegisterForm.css";
import { reduxForm, Field } from "redux-form";
import LoginField from "./Field";

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(formValues =>
            console.log(formValues)
          )}
        >
          <Field
            type="text"
            name="firstName"
            label="First Name"
            component={LoginField}
          />
          <Field
            type="text"
            name="lastName"
            label="Last Name"
            component={LoginField}
          />
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
          <Field
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            component={LoginField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "RegisterForm" })(RegisterForm);
