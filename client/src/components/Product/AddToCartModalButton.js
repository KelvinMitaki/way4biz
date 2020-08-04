import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./AddToCartModalButton.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={props.handleClose}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => props.history.goBack()}
                  className="btn btn-lg continue-btn "
                >
                  Continue Shopping
                </div>
              </div>
              <div className="col-md-6 my-2">
                <Link className="btn btn-lg shopping-btn-modal" to="/cart">
                  Proceed To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default withRouter(Modal);
