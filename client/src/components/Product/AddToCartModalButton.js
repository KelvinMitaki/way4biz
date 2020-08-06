import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./AddToCartModalButton.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-nones";

  return (
    <div className={showHideClassName} onClick={props.handleClose}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={props.handleClose}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="container p-0">
            <p className="mb-3" style={{ textJustify: "left" }}>
              A new item has been added to your Shopping Cart. You now have 2
              items in your Shopping Cart.
            </p>
            <hr className="my-2" />
            <div className="row">
              <div className="col-md-6 my-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => props.handleClose()}
                  className="btn btn-md continue-btn "
                >
                  Continue Shopping
                </div>
              </div>
              <div className="col-md-6 my-2">
                <Link className="btn btn-md shopping-btn-modal" to="/cart">
                  Proceed To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={handleClose}>close</button> */}
      </section>
    </div>
  );
};
export default withRouter(Modal);
