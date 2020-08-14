import React from "react";

import "./EarnPoints.css";
import { Field, reduxForm, reset } from "redux-form";
import EarnPointsInput from "./EarnPointsInput";
import { connect } from "react-redux";
import validator from "validator";
import { sendReferralCode } from "../../redux/actions";
let email;
class EarnPoints extends React.Component {
  render() {
    email = this.props.email;
    return (
      <div className="container py-4" style={{ backgroundColor: "#fff" }}>
        <h6>
          You currently have {this.props.points} points. To earn more points
          refer many sellers to sell on our platform.
        </h6>

        <h6 className="my-2">
          Lets get you more points. Key in the email of someone to refer. Then
          press send to send the referral.
        </h6>

        <form
          onSubmit={this.props.handleSubmit(formValues =>
            this.props.sendReferralCode(
              {
                ...formValues,
                sellerName: `${this.props.firstName} ${this.props.lastName}`
              },
              reset
            )
          )}
        >
          <div
            className="row no-gutters align-items-center m-0 p-0"
            style={{ height: "30px" }}
          >
            <Field
              component={EarnPointsInput}
              placeholder="test@gmail.com"
              type="text"
              name="points"
            />
          </div>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.points) {
    errors.points = "Please fill in this field";
  }
  if (formValues.points && !validator.isEmail(formValues.points.trim())) {
    errors.points = "Please enter a valid email or phone number";
  }
  if (formValues.points && formValues.points === email) {
    errors.points = "Invalid email";
  }

  return errors;
};
const mapStateToProps = state => {
  return {
    email: state.auth.user.email,
    firstName: state.auth.user.firstName,
    lastName: state.auth.user.lastName,
    points: state.auth.user.points
  };
};
export default reduxForm({ form: "EarnPoints", validate })(
  connect(mapStateToProps, { sendReferralCode })(EarnPoints)
);