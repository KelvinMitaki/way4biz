import React from "react";

import "./AddToCartModalButton.css";

const modal = (props) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(-30vh)" : "translateY(-100vh)",
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
                <a className="btn btn-md continue-btn " href="/">
                  Continue Shopping
                </a>
              </div>
              <div className="col-md-6 my-2">
                <a className="btn btn-md shopping-btn-modal" href="/cart">
                  Proceed To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
