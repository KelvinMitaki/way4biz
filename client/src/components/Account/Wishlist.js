import React, { Component } from "react";
import AccountMenu from "./AccountMenu";

import "./WishList.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

export class Wishlist extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
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
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}

export default Wishlist;
