import React from "react";

import "./Logistics.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

class Logistics extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="logistics white-body">
            <div className="container"></div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default Logistics;
