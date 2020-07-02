import React from "react";
import { Link } from "react-router-dom";

import "./AddToCartModalButton.css";

const modal = (props) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(-30vh)" : "translateY(-400vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-2">
                <Link to="/" className="btn btn-md continue-btn ">
                  Continue Shopping
                </Link>
              </div>
              <div className="col-md-6 my-2">
                <Link to="/cart" className="btn btn-md shopping-btn-modal">
                  Proceed To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
