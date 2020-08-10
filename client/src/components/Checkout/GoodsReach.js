import React from "react";

import "./GoodsReach.css";
import { Field } from "redux-form";
import RadioField from "./RadioField";
import DeliveryMethods from "./DeliveryMethods";
import PickUp from "./PickUp";
import { connect } from "react-redux";

class GoodsReach extends React.Component {
  state = { collection: false, delivery: false };
  componentDidUpdate() {
    if (
      Object.keys(this.props.address).length !== 0 &&
      this.state.collection === true
    ) {
      this.setState({ collection: false });
    }
  }
  handleCollectionOpen = e => {
    this.setState({
      collection: true
    });
  };

  handleCollectionClose = e => {
    this.setState({
      collection: false
    });
  };

  handleDeliveryOpen = e => {
    this.setState({
      delivery: true
    });
  };

  handleDeliveryClose = e => {
    this.setState({
      delivery: false
    });
  };

  render() {
    return (
      <div className="ml-3 mt-2">
        {this.state.delivery ? (
          <DeliveryMethods
            delivery={this.handleDeliveryClose}
            show={this.state.delivery}
          />
        ) : null}
        {this.state.collection ? (
          <PickUp
            collection={this.handleCollectionClose}
            show={this.state.collection}
          />
        ) : null}
        <div className="goods-reach">
          <Field
            type="radio"
            label="Self Collection"
            name="goods-reach"
            value="self-collection"
            id="radio-5000"
            component={RadioField}
            onChange={this.handleCollectionOpen}
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
            onChange={this.handleDeliveryOpen}
          />
          <div>
            <p>Let our delivery personel deliver your goods at your place.</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    address: state.selfCollection.address
  };
};
export default connect(mapStateToProps)(GoodsReach);
