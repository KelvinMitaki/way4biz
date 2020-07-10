import React, { Component } from "react";
import AccountMenu from "./AccountMenu";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./AddReview.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import Rating from "../Product/Rating";
import { redirectOnFail } from "../../redux/actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import AddReviewForm from "./AddReviewForm";
class AddReview extends Component {
  componentDidMount() {
    this.props.redirectOnFail(
      this.props.match.params.productId,
      this.props.match.params.orderId,
      this.props.history
    );
  }

  render() {
    return (
      <div>
        <AccountHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8 box-container  add-review-wrapper">
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-2" }}
              >
                <div className="d-flex align-items-center">
                  <Link to="/pending/reviews">
                    <BsArrowLeft />
                  </Link>
                  <h3 className="ml-3">Rate Item</h3>
                </div>
              </IconContext.Provider>
              <div className="d-flex justify-content-center my-3">
                <Rating clickable={true} />
              </div>
              <form style={{ textAlign: "center" }}>
                <Field name="firstName" component={AddReviewForm} type="text" />
                <Field name="title" component={AddReviewForm} type="text" />
                <Field name="body" component={AddReviewForm} type="text" />

                <button className="btn btn-md submit-review-btn">
                  Submit Review
                </button>
              </form>
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
    (formValues.firstName && formValues.trim().length === 0)
  ) {
    errors.firstName = "Please enter a valid first name";
  }
  if (
    !formValues.title ||
    (formValues.title && formValues.title.trim().length < 2)
  ) {
    errors.title = "Please enter a valid title";
  }
  if (
    !formValues.body ||
    (formValues.body && formValues.body.trim().length < 2)
  ) {
    errors.body = "Please enter a valid review";
  }
  return errors;
};
export default withRouter(
  reduxForm({ validate, form: "AddReview" })(
    connect(null, { redirectOnFail })(AddReview)
  )
);
