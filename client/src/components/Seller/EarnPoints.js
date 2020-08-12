import React from "react";

import "./EarnPoints.css";
import { Field, reduxForm } from "redux-form";
import EarnPointsInput from "./EarnPointsInput";
import { connect } from "react-redux";
import validator from "validator";
let email;
let phoneNumber;
class EarnPoints extends React.Component {
  render() {
    email = this.props.email;
    phoneNumber = this.props.phoneNumber;
    return (
      <div className="container py-2" style={{ backgroundColor: "#fff" }}>
        <h6>
          You currently have 1000 points. To earn more points refer many sellers
          to sell on our platform. The more points you have, the higher the
          chances of winnig a brand new suzuki porsche.
        </h6>

        <h6 className="my-2">
          Lets get you more points. Key in the phone number or email of someone
          to refer.
        </h6>
        <div className="input-group form-group">
          <form
            onSubmit={this.props.handleSubmit(formValues =>
              console.log(formValues)
            )}
          >
            <Field
              component={EarnPointsInput}
              placeholder="test@gmail.com or 712345678"
              type="text"
              name="points"
            />
            <div className="input-group-append">
              <button
                disabled={this.props.invalid || this.props.pristine}
                id="referral-btn"
              >
                Send Referral
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.points) {
    errors.points = "Please fill in this field";
  }
  if (
    formValues.points &&
    !validator.isEmail(formValues.points.trim()) &&
    formValues.points &&
    !validator.isNumeric(formValues.points)
  ) {
    errors.points = "Please enter a valid email or phone number";
  }
  if (formValues.points && formValues.points === email) {
    errors.points = "Invalid email";
  }
  if (formValues.points && formValues.points === phoneNumber) {
    errors.points = "Invalid Phone Number";
  }
  if (
    formValues.points &&
    validator.isNumeric(formValues.points) &&
    formValues.points.length !== 9
  ) {
    errors.points = "Please enter a 9 digit phone number";
  }
  return errors;
};
const mapStateToProps = state => {
  return {
    email: state.auth.user.email,
    phoneNumber: state.auth.user.phoneNumber
  };
};
export default reduxForm({ form: "EarnPoints", validate })(
  connect(mapStateToProps)(EarnPoints)
);
