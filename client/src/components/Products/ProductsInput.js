import React, { Component } from "react";
import Rating from "../Product/Rating";
import { handleChangeAction, handleCheckboxAction } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./ProductsInput.css";

class ProductsInput extends Component {
  handleCheckbox = (event) => {
    const { checked, name } = event.target;

    this.props.handleCheckboxAction(
      { checked, name },
      this.props.match.params.category,
      this.props.history
    );
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.handleChangeAction({ name, value });
  };
  render() {
    const {
      priceMax,
      priceMin,
      rating,
      freeShipping,
      latest,
    } = this.props.filter;
    return (
      <div>
        <div className="row my-3">
          <div className="d-flex ml-3">
            <p className="mr-1">Price:</p>
            <div className="box-container sort-input-wrapper">
              <input
                onChange={this.handleChange}
                name="priceMin"
                placeholder="min"
                style={{ width: "80px" }}
                value={priceMin || ""}
              />
              -
              <input
                onChange={this.handleChange}
                name="priceMax"
                placeholder="max"
                style={{ width: "80px" }}
                value={priceMax || ""}
              />
              <button
                className="btn btn-sm ml-2"
                style={{ backgroundColor: "#f76b1a", color: "#fff" }}
              >
                OK
              </button>
            </div>
          </div>

          <div className="d-flex ml-4">
            <input
              onChange={this.handleCheckbox}
              name="rating"
              type="checkbox"
              className="mr-1"
              checked={rating}
            />
            <Rating clickable={false} size={15} value={4} />
            <span className="ml-2">&up</span>{" "}
          </div>
          <div className="d-flex ml-5">
            <input
              onChange={this.handleCheckbox}
              name="freeShipping"
              type="checkbox"
              checked={freeShipping}
            />
            <p className="ml-1">Free Shipping</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="d-flex ml-3">
            <input
              onChange={this.handleCheckbox}
              name="latest"
              type="checkbox"
              checked={latest}
            />

            <p className="ml-1">Latest</p>
          </div>
          <div className="d-flex ml-3">
            <input name="price" type="radio" />
            <p className="ml-1">Lowest Price</p>
          </div>
          <div className="d-flex ml-3">
            <input name="price" type="radio" />

            <p className="ml-1">Highest Price</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    handleChangeAction,
    handleCheckboxAction,
  })(ProductsInput)
);
