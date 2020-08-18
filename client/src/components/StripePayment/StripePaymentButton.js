import React, { Component } from "react";
import { makeOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import "./StripePaymentButton.css";

class StripePaymentButton extends Component {
  state = {
    error: null,
    clicked: false,
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { stripe, elements } = this.props;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      this.setState({ error: error.message });
    }
    if (paymentMethod) {
      this.setState({ error: null });
      this.props.makeOrder(
        {
          ...this.props.order,
          id: paymentMethod.id,
        },
        this.props.history
      );
    }
  };
  render() {
    const priceArr = this.props.cart.map((item) => item.price * item.quantity);
    const amount = priceArr.reduce((acc, cur) => acc + cur, 0);
    const { stripe } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div id="stripe-card-wrapper">
            <CardElement />
          </div>
          <button type="submit" disabled={!stripe}>
            Pay Ksh.
            {amount &&
              Math.round(
                amount + this.props.distance.shippingFees
              ).toLocaleString()}
          </button>
        </form>
        <div style={{ color: "red", margin: "10px 0px" }}>
          {this.state.error}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    distance: state.detailsPersist.distance,
  };
};
export default withRouter(
  connect(mapStateToProps, { makeOrder })(StripePaymentButton)
);
