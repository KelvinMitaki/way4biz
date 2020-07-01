import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PhoneNumber from "./PhoneNumber";
import { connect } from "react-redux";
import validator from "validator";
import AuthHeader from "../Authenticate/AuthHeader";
import { fetchSeller } from "../../redux/actions";

export class SellerPhoneNumber extends Component {
  componentDidMount() {
    this.props.fetchSeller();
  }
  render() {
    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <br />
        <br />
        <form
          onSubmit={this.props.handleSubmit(formValues =>
            console.log(formValues)
          )}
        >
          <Field
            type="text"
            name="phoneNumber"
            label="Phone Number"
            component={PhoneNumber}
          />
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-md btn-block primary-button mt-3"
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
              <span>Send SMS</span>
            )}
          </button>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (
    !formValues.phoneNumber ||
    (formValues.phoneNumber && !validator.isNumeric(formValues.phoneNumber))
  ) {
    errors.phoneNumber = "Please enter a valid phone number";
  }
  if (formValues.phoneNumber && formValues.phoneNumber.length !== 9) {
    errors.phoneNumber = "Please enter a valid phone number";
  }
  return errors;
};
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};
export default reduxForm({ validate, form: " SellerPhoneNumber" })(
  connect(mapStateToProps, { fetchSeller })(SellerPhoneNumber)
);
