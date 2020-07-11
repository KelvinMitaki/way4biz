import React from "react";
import "../Checkout/AddressForm.css";
import { reduxForm, Field } from "redux-form";
import validator from "validator";
import { withRouter, Link } from "react-router-dom";
import TextareaForm from "../Checkout/TextareaField";
import SelectField from "../Checkout/SelectField";
import AddressPhoneNumber from "./AddressPhoneNumber";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import FormField from "../Checkout/FormField";
import "./Account.css";
import { connect } from "react-redux";
import { editUser } from "../../redux/actions";
const category = [
  { key: "nairobi", text: "Nairobi", value: "nairobi" },
  { key: "kajiado", text: "Kajiado", value: "kajiado" },
  { key: "kisumu", text: "Kisumu", value: "kisumu" },
  { key: "mombasa", text: "Mombasa", value: "mombasa" },
  { key: "embu", text: "Embu", value: "embu" },
  { key: "meru", text: "Meru", value: "meru" },
];

class Account extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AccountHeader />
        <div className="container account-wrapper">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8  box-container" id="address-form">
              <h3 className="legend">My Account</h3>
              {/* <hr /> */}
              <form
                onSubmit={this.props.handleSubmit((formValues) =>
                  this.props.editUser(formValues, this.props.history)
                )}
              >
                <Field
                  type="text"
                  name="firstName"
                  label="First Name"
                  component={FormField}
                />
                <Field
                  type="text"
                  name="lastName"
                  label="Last Name"
                  component={FormField}
                />
                <Field
                  type="text"
                  name="phoneNumber"
                  label="Phone Number"
                  component={AddressPhoneNumber}
                />
                <Field
                  name="address"
                  label="Delivery Address"
                  component={TextareaForm}
                />
                <Field
                  name="city"
                  label="City"
                  options={category}
                  component={SelectField}
                />
                <Field
                  name="town"
                  label="Town"
                  options={category}
                  component={SelectField}
                />

                <button
                  className="btn btn-md btn-block address-btn mt-3 "
                  disabled={
                    !this.props.valid ||
                    this.props.loading ||
                    this.props.pristine
                  }
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
                    <span>Save</span>
                  )}
                </button>
              </form>
              <div className="form-primary-error">
                {this.props.editUserError && this.props.editUserError}
              </div>
              <br />
              {!this.props.googleId && (
                <p>
                  <Link style={{ color: "#f76b1a" }} to="/change-password">
                    Change password
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}
const validate = (formValues) => {
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
    !formValues.phoneNumber ||
    (formValues.phoneNumber &&
      !validator.isNumeric(formValues.phoneNumber.toString()))
  ) {
    errors.phoneNumber = "Please enter a valid phone number";
  }
  if (
    !formValues.phoneNumber ||
    (formValues.phoneNumber && formValues.phoneNumber.length !== 9)
  ) {
    errors.phoneNumber = "Please enter a valid phone number";
  }
  if (
    !formValues.address ||
    (formValues.address && formValues.address.trim().length < 2)
  ) {
    errors.address = "Please enter a valid address";
  }
  if (!formValues.city || (formValues.city && formValues.city === "choose")) {
    errors.city = "Please choose a city";
  }
  if (!formValues.town || (formValues.town && formValues.town === "choose")) {
    errors.town = "Please choose a town";
  }
  return errors;
};
const mapStateToProps = (state) => {
  return {
    initialValues: state.auth.user,
    googleId: state.auth.user.googleId,
    editUserError: state.auth.editUserError,
    loading: state.auth.loading,
  };
};

export default withRouter(
  connect(mapStateToProps, { editUser })(
    reduxForm({ validate, form: "Account" })(Account)
  )
);
