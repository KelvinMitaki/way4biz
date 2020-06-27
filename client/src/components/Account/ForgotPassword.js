import React from "react";

import "./ForgotPassword.css";
import AuthHeader from "../Authenticate/AuthHeader";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div id="forgot-password-section">
        <AuthHeader />
        <div id="forgot-pass-form-section" className="mt-5">
          <h3 className="legend">Request Password Reset</h3>
          <h3>Form Here</h3>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
