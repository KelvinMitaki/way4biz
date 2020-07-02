import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AuthField from "../Authenticate/AuthField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import validator from "validator";
import { registerSeller } from "../../redux/actions";
import AuthHeader from "../Authenticate/AuthHeader";
import SelectField from "../Checkout/SelectField";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import SellerTextArea from "../Account/SellerTextArea";
import SellerDropDown from "./SellerDropDown";
import SellerCheckBox from "./SellerCheckBox";

const category = [
  { key: "nairobi", text: "Nairobi", value: "nairobi" },
  { key: "kajiado", text: "Kajiado", value: "kajiado" },
  { key: "kisumu", text: "Kisumu", value: "kisumu" },
  { key: "mombasa", text: "Mombasa", value: "mombasa" },
  { key: "embu", text: "Embu", value: "embu" },
  { key: "meru", text: "Meru", value: "meru" }
];

export class Sell extends Component {
  render() {
    return (
      <div>
        <SellerDashBoardHeader />
        <br />
        <br />
        <form
          onSubmit={this.props.handleSubmit(formValues =>
            console.log(formValues)
          )}
        >
          <Field
            type="text"
            name="name"
            label="Name Of The Product"
            component={AuthField}
          />
          <Field
            type="number"
            name="price"
            label="Price Of The Product"
            component={AuthField}
          />

          <Field
            name="description"
            label="Product Description"
            component={SellerTextArea}
          />
          {/* <div className="form-primary-error">
            {this.props.registerError && this.props.registerError}
          </div> */}
          <Field
            type="number"
            name="stockQuantity"
            label="Product Quantity"
            component={AuthField}
          />
          <Field
            type="checkbox"
            name="freeShipping"
            label="Free Shipping"
            component={SellerCheckBox}
          />
          {/* DROPDOWNS */}
          <Field
            options={category}
            name="category"
            label="Product Category"
            component={SellerDropDown}
          />
          <br />
          <Field
            options={category}
            name="subcategory"
            label="Product Subcategory"
            component={SellerDropDown}
          />
          {/* DROPDOWNS */}
          <Field
            type="text"
            name="imageUrl"
            label="Image URL"
            component={AuthField}
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
              <span>Add Product</span>
            )}
          </button>

          <br />
          <br />
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (
    !formValues.name ||
    (formValues.name && formValues.name.trim().length < 2)
  ) {
    errors.name = "Please enter a valid product name";
  }
  if (!formValues.price) {
    errors.price = "Please enter a valid price";
  }
  if (!formValues.stockQuantity) {
    errors.email = "Please enter a valid product quantity";
  }
  if (!formValues.category) {
    errors.category = "Please choose a category";
  }
  if (!formValues.subcategory) {
    errors.subcategory = "Please enter a valid subcategory";
  }
  if (
    !formValues.description ||
    (formValues.description && formValues.description.trim().length < 20)
  ) {
    errors.description =
      "Please enter a description with a minimum of 20 characters";
  }
  if (
    !formValues.imageUrl ||
    (formValues.imageUrl && !validator.isURL(formValues.imageUrl))
  ) {
    errors.imageUrl = "Please enter a valid image url";
  }

  return errors;
};
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};
export default withRouter(
  reduxForm({
    validate,
    form: "Sell"
  })(connect(mapStateToProps, { registerSeller })(Sell))
);
