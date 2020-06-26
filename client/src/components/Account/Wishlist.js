import React, { Component } from "react";
import AccountMenu from "./AccountMenu";

import "./WishList.css";

export class Wishlist extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <AccountMenu />
          </div>
          <div className="col-lg-8 box-container wishlist">
            <h1 style={{ textAlign: "center" }}>No saved items</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
