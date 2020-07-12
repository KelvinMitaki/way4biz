import React, { Component } from "react";
import Rating from "../Product/Rating";

export class ProductsInput extends Component {
  state = {
    priceMax: null,
    priceMin: null,
    rating: false,
    freeShipping: false,
    latest: false
  };
  handleCheckbox = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = event => {
    //   **TODO CHECK WHAT'S BIGGER BTN MIN AND MAX PRICE
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="row my-3">
          <div className="d-flex ml-3">
            <p className="mr-1">Price:</p>
            <input
              onChange={this.handleChange}
              name="priceMin"
              placeholder="min"
              style={{ width: "80px" }}
            />
            -
            <input
              onChange={this.handleChange}
              name="priceMax"
              placeholder="max"
              style={{ width: "80px" }}
            />
          </div>

          <div className="d-flex ml-4">
            <input
              onClick={this.handleCheckbox}
              name="rating"
              type="checkbox"
              className="mr-1"
            />
            <Rating clickable={false} size={15} value={4} />
            <span className="ml-2">&up</span>{" "}
          </div>
          <div className="d-flex ml-5">
            <input
              onClick={this.handleCheckbox}
              name="freeShipping"
              type="checkbox"
            />
            <p className="ml-1">Free Shipping</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="d-flex ml-3">
            <input
              onClick={this.handleCheckbox}
              name="latest"
              type="checkbox"
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

export default ProductsInput;
