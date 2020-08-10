import React from "react";

import "./PickUp.css";

class PickUp extends React.Component {
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-header">
            <span className="close-modal-btn" onClick={this.props.collection}>
              ×
            </span>
          </div>
          <div className="modal-body">
            <div className="container p-0">
              <h4>Available pickup points</h4>
              <div className="ml-3 mt-2">
                <ul className="pick-up-points">
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                  <li className="pick-up-point">
                    <p>Ngong Road Store</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PickUp;
