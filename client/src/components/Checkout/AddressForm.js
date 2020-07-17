/*global google*/
import React from "react";
import FormField from "./FormField";
import "./AddressForm.css";
import { reduxForm, Field } from "redux-form";
import validator from "validator";
import { withRouter } from "react-router-dom";
import AddressPhoneNumber from "../Account/AddressPhoneNumber";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { checkoutUser } from "../../redux/actions";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import AutoComplete from "../Account/Autocomplete";
import SimpleMap from "../Account/SimpleMap";

class AddressForm extends React.Component {
  state = {
    cityLatLng: {},
    townLatLng: {},
    addressLatLng: {
      lat: -1.28585,
      lng: 36.8263
    }
  };
  // componentDidMount(){
  //   console.log(props)
  // }
  handleCitySelect = async selectedCity => {
    const results = await geocodeByAddress(selectedCity);
    const latlng = await getLatLng(results[0]);
    this.setState({ cityLatLng: latlng });
    this.props.change("city", selectedCity);
  };
  handleTownSelect = async selectedTown => {
    const results = await geocodeByAddress(selectedTown);
    const latlng = await getLatLng(results[0]);
    this.setState({ townLatLng: latlng });
    this.props.change("town", selectedTown);
  };
  handleAddressSelect = async selectedAddress => {
    const results = await geocodeByAddress(selectedAddress);
    const latlng = await getLatLng(results[0]);
    this.setState({ addressLatLng: latlng });
    this.props.change("address", selectedAddress);
  };
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <div className="row">
              <div
                className="col-md-9 my-5 mx-auto box-container"
                id="address-form"
              >
                <h3 className="legend">Address</h3>
                {/* <hr /> */}
                <form
                  onSubmit={this.props.handleSubmit(formValues =>
                    this.props.checkoutUser(formValues, this.props.history)
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
                    type="text"
                    name="city"
                    label="City"
                    component={AutoComplete}
                    options={{ types: ["(cities)"] }}
                    onSelect={this.handleCitySelect}
                  />
                  <Field
                    type="text"
                    name="town"
                    label="Town"
                    component={AutoComplete}
                    options={{ types: ["(cities)"] }}
                    onSelect={this.handleTownSelect}
                  />
                  <Field
                    type="text"
                    name="address"
                    label="Street Address"
                    component={AutoComplete}
                    options={{
                      location: new google.maps.LatLng(this.state.cityLatLng),
                      radius: 1000,
                      types: ["establishment"]
                    }}
                    onSelect={this.handleAddressSelect}
                  />
                  <SimpleMap
                    key={this.state.addressLatLng.lat}
                    addressLatLng={this.state.addressLatLng}
                  />
                  <button
                    className="btn btn-md btn-block address-btn mt-3 "
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
                      <span>Proceed To Checkout</span>
                    )}
                  </button>
                  <div className="form-primary-error">
                    {this.props.checkoutUserError &&
                      this.props.checkoutUserError}
                  </div>
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
const validate = formValues => {
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
const mapStateToProps = state => {
  return {
    initialValues: state.auth.user,
    loading: state.auth.loading,
    checkoutUserError: state.auth.checkoutUserError
  };
};
export default withRouter(
  connect(mapStateToProps, { checkoutUser })(
    reduxForm({ validate, form: "AddressForm" })(AddressForm)
  )
);
