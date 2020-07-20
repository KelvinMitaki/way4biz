import React, { Component } from "react";

export class EmailConfirm extends Component {
  render() {
    return (
      <div className="col-md-6 mx-auto mt-5 box-container p-4">
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          Email Confirmation
        </h3>
        <p>
          An email has been sent to your email address, please check it to
          confirm your account.
        </p>
      </div>
    );
  }
}

export default EmailConfirm;
