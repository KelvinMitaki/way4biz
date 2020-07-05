import React from "react";

import "./MainCategories.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper.js";
import "./MainCategories.css";
import { Link } from "react-router-dom";

class MainCategories extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div id="all-categories-wrapper">
            <div className="container">
              <div className="row">
                <div className="col my-3">
                  <h3>All Categories</h3>
                </div>
              </div>
            </div>
            <div className="container categories-section box-container">
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
              <Link to="/" className="individual-category">
                <div>Men Clothings</div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default MainCategories;
