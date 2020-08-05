import React from "react";

import "./NormalDelivery.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

class NormalDelivery extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container"></div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default NormalDelivery;
