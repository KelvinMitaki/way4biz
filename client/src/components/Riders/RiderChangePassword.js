import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import FormField from "../Checkout/FormField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MobileLogo from "../Header/MobileLogo";

export class RiderChangePassword extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <Header />
          <div className="container">
            <div className="row">
              <div
                className="col-md-9 my-5 mx-auto box-container"
                id="address-form"
              >
                <h3 className="legend">Change Password</h3>
                {/* <hr /> */}
                <form
                //   onSubmit={this.props.handleSubmit((formValues) => {
                //     console.log(formValues);
                //   })}
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
                    className="btn btn-md btn-block address-btn mt-3 "
                    type="submit"
                  >
                    <span>Save And Continue</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

const validate = (formValues) => {
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
const mapStateToProps = (state) => {
  return {};
};

export default reduxForm({ validate, form: "RiderChangePassword" })(
  RiderChangePassword
);
