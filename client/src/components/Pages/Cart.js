import React from "react";
import MyCart from "../MyCart/MyCart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

function Cart() {
  return (
    <div>
      <Header />
      <MyCart />
      <Footer />
      <MiniMenuWrapper />
    </div>
  );
}

export default Cart;
