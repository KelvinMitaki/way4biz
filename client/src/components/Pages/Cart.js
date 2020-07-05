import React from "react";
import MyCart from "../MyCart/MyCart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import "./Cart.css";
function Cart() {
  return (
    <div className="main">
      <div className="content">
        <Header />
        <MyCart />
      </div>
      <Footer />
      <MiniMenuWrapper />
    </div>
  );
}

export default Cart;
