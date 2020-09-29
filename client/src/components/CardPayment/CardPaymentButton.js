import React, { useState, useRef } from "react";
import { saveOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CardPaymentButton.css";

const CardPaymentButton = ({ saveOrder, history }) => {
  const [clicked, setClicked] = useState(false);
  const payment = useRef();
  const makePayment = () => {
    setClicked(true);
    if (!clicked) {
      saveOrder(history);
    }
  };
  return (
    <div>
      <button
        disabled={clicked}
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
