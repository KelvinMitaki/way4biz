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
          <div className="container box-container logistics">
            <h1 style={{ fontSize: "10vh" }}>Hold On</h1>
            <h2>Something really good is coming soon!</h2>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default Logistics;
