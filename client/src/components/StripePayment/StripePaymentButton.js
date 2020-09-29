import React, { Component } from "react";
import { makeOrder, saveOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./StripePaymentButton.css";
import { useRef } from "react";

// class StripePaymentButton extends Component {
//   state = {
//     error: null,
//     clicked: false
//   };

//   componentDidMount() {
//     if (this.state.clicked) {
//       this.setState({ clicked: false });
//     }
//   }
//   handleSubmit = async e => {
//     e.preventDefault();
//     const { stripe, elements } = this.props;
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement)
//     });
//     if (error) {
//       this.setState({ error: error.message, clicked: false });
//     }
//     if (paymentMethod && !this.state.clicked) {
//       this.setState({ error: null, clicked: true });
//       this.props.makeOrder(
//         {
//           ...this.props.order,
//           id: paymentMethod.id
//         },
//         this.props.history
//       );
//     }
//   };
//   render() {
//     const priceArr = this.props.cart.map(item => item.price * item.quantity);
//     const amount = priceArr.reduce((acc, cur) => acc + cur, 0);
//     const { stripe } = this.props;
//     return (
//       <React.Fragment>
//         <form onSubmit={this.handleSubmit} id="stripe-payment-form">
//           <div id="stripe-card-wrapper">
//             <CardElement />
//           </div>
//           <div className="d-flex align-items-center justify-content-end">
//             <button
//               type="submit"
//               className="stripe-payment-btn btn-block mt-3"
//               disabled={
//                 !stripe || this.props.makeOrderLoading || this.state.clicked
//               }
//             >
//               {this.props.makeOrderLoading && (
//                 <span
//                   className="spinner-grow spinner-grow-sm"
//                   role="status"
//                   aria-hidden="true"
//                 ></span>
//               )}
//               {this.props.makeOrderLoading ? (
//                 <span> {"  "}Loading...</span>
//               ) : (
//                 <span>
//                   {" "}
//                   Pay Ksh.
//                   {amount &&
//                     Math.round(
//                       amount + this.props.distance.shippingFees
//                     ).toLocaleString()}
//                 </span>
//               )}
//             </button>
//           </div>
//         </form>
//         <div style={{ color: "red", margin: "10px 0px" }}>
//           {this.state.error}
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     distance: state.detailsPersist.distance,
//     makeOrderLoading: state.user.makeOrderLoading
//   };
// };

const StripePaymentButton = ({ distance, saveOrder }) => {
  const paypal = useRef();
  const makePayment = () => {
    saveOrder();
  };
  return (
    <div>
      <button ref={paypal} onClick={makePayment}>
        Pay
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    distance: state.detailsPersist.distance,
    makeOrderLoading: state.user.makeOrderLoading
  };
};
export default withRouter(
  connect(mapStateToProps, { saveOrder })(StripePaymentButton)
);
