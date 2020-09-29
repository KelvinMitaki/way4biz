import React from "react";
import { saveOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CardPaymentButton.css";
import { useRef } from "react";

const CardPaymentButton = ({ saveOrder, history }) => {
  const payment = useRef();
  const makePayment = () => {
    saveOrder(history);
  };
  return (
    <div>
      <button
        ref={payment}
        onClick={makePayment}
        className="secondary-button card-pay-button btn btn-block"
      >
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
  connect(mapStateToProps, { saveOrder })(CardPaymentButton)
);
