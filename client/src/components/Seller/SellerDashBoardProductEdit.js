import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import validator from "validator";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import SellerDropDown from "./SellerDropDown";
import SellerCheckBox from "./SellerCheckBox";
import { editProduct, fetchSellerProducts } from "../../redux/actions";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import EditorEdit from "./EditorEdit";
import SellerInputField from "./SellerInputField";
import PhotosPage from "./PhotosPage";
import ProductImageUploadsContainer from "./ProductImageUploadsContainer";
import ScreenLoader from "../Pages/ScreenLoader";
const category = [
  { key: "phones", text: "Phones", value: "phones" },
  { key: "clothes", text: "Clothes", value: "clothes" },
  { key: "gadgets", text: "Gadgets", value: "gadgets" },
  { key: "electronics", text: "Electronics", value: "electronics" },
  { key: "utensils", text: "Utensils", value: "utensils" },
  { key: "toys", text: "Toys", value: "toys" }
];
const subcategory = [
  { key: "iphones", text: "iPhones", value: "iphones" },
  { key: "android", text: "Android", value: "android" },
  { key: "laptops", text: "Laptops", value: "laptops" },
  { key: "televisions", text: "Televisions", value: "televisions" },
  { key: "tablets", text: "Tablets", value: "tablets" },
  { key: "shoes", text: "Shoes", value: "shoes" }
];

export class SellerEdit extends Component {
  componentDidMount() {
    this.props.fetchSellerProducts();
  }
  render() {
    if (this.props.deleteImageLoading) return <ScreenLoader />;
    if (this.props.initialValues) {
      return (
        <div className="container-fluid dashboard-wrapper">
          <SellerDashBoardHeader />
          <div className="row no-gutters">
            <div className="col-lg-3">
              <SellerDashBoardMenu />
            </div>
            <div className="col-lg-9 mt-5">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h3 style={{ textAlign: "center" }}>Edit Product</h3>
                  </div>
                </div>
                <div className="row">
                  <div id="dashboard-edit-lg-screen" className="col">
                    <form
                      onSubmit={this.props.handleSubmit(formValues =>
                        this.props.editProduct(
                          {
                            ...formValues,
                            description: this.props.description,
                            imageUrl: this.props.imageUrl
                          },
                          this.props.initialValues._id,
                          this.props.history
                        )
                      )}
                    >
                      <Field
                        type="text"
                        name="name"
                        label="Name Of The Product"
                        component={SellerInputField}
                      />
                      <Field
                        type="number"
                        name="price"
                        label="Price Of The Product in Ksh."
                        component={SellerInputField}
                      />

                      <Field
                        type="number"
                        name="stockQuantity"
                        label="Product Quantity"
                        component={SellerInputField}
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
                        options={subcategory}
                        name="subcategory"
                        label="Product Subcategory"
                        component={SellerDropDown}
                      />

                      <h5 style={{ width: "90%", margin: "15px auto 0 auto" }}>
                        Image Upload
                      </h5>
                      <PhotosPage />
                      <h5 style={{ width: "90%", margin: "15px auto 0 auto" }}>
                        Uploaded Images
                      </h5>
                      <ProductImageUploadsContainer
                        images={this.props.initialValues.imageUrl}
                      />
                      {/* DROPDOWNS */}
                      {/* <Field
                        type="text"
                        name="imageUrl"
                        label="Image URL"
                        component={SellerInputField}
                      /> */}
                      <div>
                        <h5
                          style={{
                            width: "90%",
                            margin: "10px auto"
                          }}
                        >
                          Product Description
                        </h5>
                        <EditorEdit
                          html={this.props.initialValues.description}
                        />
                      </div>
                      <button
                        style={{ cursor: "pointer", width: "90%" }}
                        className="btn btn-md btn-block primary-button my-5"
                        disabled={
                          !this.props.valid ||
                          this.props.loading ||
                          !this.props.imageUrl
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
                          <span>Edit Product</span>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
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
    !formValues.imageUrl ||
    (formValues.imageUrl.length !== 0 &&
      !validator.isURL(formValues.imageUrl[0]))
  ) {
    errors.imageUrl = "Please enter a valid image url";
  }

  return errors;
};
const mapStateToProps = (state, ownProps) => {
  let initialValues;
  if (state.sellerRegister.sellerProducts.length !== 0) {
    initialValues = state.sellerRegister.sellerProducts.find(
      p => p._id.toString() === ownProps.match.params.productId.toString()
    );
  }
  return {
    loading: state.auth.loading,
    deleteImageLoading: state.image.deleteImageLoading,
    initialValues,
    description: state.product.description,
    imageUrl: state.image.imageUrl
  };
};
export default withRouter(
  connect(mapStateToProps, { editProduct, fetchSellerProducts })(
    reduxForm({
      validate,
      form: "SellerEdit"
    })(SellerEdit)
  )
);
