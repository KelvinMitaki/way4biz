import React from "react";
import FormField from "./FormField";
import "./AddressForm.css";
import { reduxForm, Field } from "redux-form";
import validator from "validator";
import SelectField from "./SelectField";
import TextareaForm from "./TextareaField";
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];

class AddressForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-9 my-5 mx-auto box-container"
            id="address-form"
          >
            <h3 className="legend">Address</h3>
            <hr />
            <form
              onSubmit={this.props.handleSubmit((formValues) =>
                console.log(formValues)
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
                component={FormField}
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
              <div className="address-btn-wrapper">
                <button
                  disabled={!this.props.valid}
                  type="submit"
                  className="btn btn-md address-btn"
                >
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
    (formValues.phoneNumber && !validator.isNumeric(formValues.phoneNumber))
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

export default reduxForm({ validate, form: "AddressForm" })(AddressForm);
