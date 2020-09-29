import React from "react";
import { saveOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./StripePaymentButton.css";
import { useRef } from "react";

const StripePaymentButton = ({ saveOrder }) => {
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
