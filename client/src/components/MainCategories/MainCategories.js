import React from "react";

import "./MainCategories.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper.js";
import "./MainCategories.css";

class MainCategories extends React.Component {
  render() {
    return (
      <div className="main-small-screen-categories">
        <Header />
        <h3>No categories yet.</h3>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default MainCategories;
