import React, { Component } from "react";
import { makeOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
class StripePaymentButton extends Component {
  state = {
    error: null,
    clicked: false
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { stripe, elements } = this.props;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    if (error) {
      this.setState({ error: error.message });
    }
    if (paymentMethod) {
      this.setState({ error: null });
      console.log(paymentMethod);
    }
  };
  render() {
    const priceArr = this.props.cart.map(item => item.price * item.quantity);
    const amount = priceArr.reduce((acc, cur) => acc + cur, 0);
    const { stripe } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        <div style={{ color: "red", margin: "10px 0px" }}>
          {this.state.error}
        </div>
        {/* <StripeCheckout
        //   opened={() => this.setState({ open: true, clicked: false })}
        //   closed={() => this.setState({ open: false })}
        //   name="Way4Biz"
        //   amount={(amount + Math.round(this.props.distance.shippingFees)) * 100}
        //   token={token =>
        //     this.props.makeOrder(
        //       {
        //         ...this.props.order,
        //         ...token
        //       },
        //       this.props.history
        //     )
        //   }
        //   stripeKey={process.env.REACT_APP_STRIPE}
        //   currency="KES"
        //   email={this.props.email}
        //   locale="en"
        // >
        //   <button
        //     className="btn btn-md initiate-payment"
        //     onClick={() => this.setState({ clicked: true })}
        //   >
        //     {!this.state.open && this.state.clicked && (
        //       <span
        //         className="spinner-grow spinner-grow-sm"
        //         role="status"
        //         aria-hidden="true"
        //       ></span>
        //     )}
        //     {!this.state.open && this.state.clicked ? (
        //       <span> {"  "}Loading...</span>
        //     ) : (
        //       <span>Initiate Payment</span>
        //     )}
        //   </button>
        // </StripeCheckout> */}
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, { makeOrder })(StripePaymentButton));
