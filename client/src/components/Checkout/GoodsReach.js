import React from "react";

import "./GoodsReach.css";
import { Field } from "redux-form";
import RadioField from "./RadioField";

class GoodsReach extends React.Component {
  state = { collection: false, delivery: false };

  handleCollection = (e) => {
    this.setState((prevState) => {
      return {
        collection: !prevState.collection,
      };
    });
  };

  handleDelivery = (e) => {
    this.setState((prevState) => {
      return {
        delivery: !prevState.delivery,
      };
    });
  };

  render() {
    return (
      <div className="ml-3 mt-2">
        <div className="goods-reach">
          <Field
            type="radio"
            label="Self Collection"
            name="goods-reach"
            value="self-collection"
            id="radio-5000"
            component={RadioField}
            onChange={this.handleCollection}
          />

          <div>
            <p>
              You will collect your goods from your pick up location of choice
              after 2 days.{" "}
            </p>
          </div>
        </div>
        <div className="goods-reach">
          <Field
            type="radio"
            label="Our Delivery"
            name="goods-reach"
            id="radio-5500"
            value="our-delivery"
            component={RadioField}
            onChange={this.handleDelivery}
          />

          <div>
            <p>Let our delivery guy deliver your goods at your place.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsReach;
