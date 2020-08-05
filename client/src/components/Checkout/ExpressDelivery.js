import React from "react";

import "./ExpressDelivery.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";

class ExpressDelivery extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="d-flex align-items-center">
            <div style={{ flex: "1" }}>
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-2" }}
              >
                <div className="d-flex align-items-center">
                  {/* goback() */}
                  <Link to="/">
                    <BsArrowLeft />
                  </Link>
                </div>
              </IconContext.Provider>
            </div>

            <h3 className="ml-1" style={{ flex: "2" }}>
              Express delivery
            </h3>
          </div>{" "}
          <h6>
            this kind of shipping takes an average of 1-2 days. It is expensive
            than normal.The price is calculated based on distance.
          </h6>
          <p>
            <Link to="/normal-delivery">About normal shipping</Link>
          </p>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default ExpressDelivery;
