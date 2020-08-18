import React from "react";

import "./GoodsReach.css";
import { Field, formValueSelector } from "redux-form";
import RadioField from "./RadioField";
import DeliveryMethods from "./DeliveryMethods";
import PickUp from "./PickUp";
import { connect } from "react-redux";
import {
  collectionOpenAction,
  collectionCloseAction
} from "../../redux/actions";

class GoodsReach extends React.Component {
  state = { delivery: false };

  handleCollectionOpen = e => {
    this.props.collectionOpenAction();
  };

  handleCollectionClose = e => {
    this.props.collectionCloseAction();
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
        {this.props.collection ? (
          <PickUp
            collection={this.handleCollectionClose}
            show={this.props.collection}
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
            <p>Let our delivery personnel deliver your goods at your place.</p>
          </div>
        </div>
      </div>
    );
  }
}

const selector = formValueSelector("Chekout");
const mapStateToProps = state => {
  const goodsReach = selector(state, "goods-reach");
  const stateDelivery = selector(state, "delivery");
  return {
    address: state.selfCollection.address,
    collection: state.selfCollection.collection,
    goodsReach,
    stateDelivery
  };
};
export default connect(mapStateToProps, {
  collectionOpenAction,
  collectionCloseAction
})(GoodsReach);
