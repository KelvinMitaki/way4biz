import React from "react";

import "./HelpCenter.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { AiOutlineSearch } from "react-icons/ai";

class HelpCenter extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container-fluid p-0 m-0">
            <div className="help-center-hero">
              <h1 id="help-center-header">How can we help?</h1>

              <div className="input-group mt-3" id="help-center-input">
                <div className="input-group-prepend">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AiOutlineSearch style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <input className="form-control" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default HelpCenter;
