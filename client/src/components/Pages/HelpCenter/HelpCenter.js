import React from "react";

import "./HelpCenter.css";

import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";
import { AiOutlineSearch } from "react-icons/ai";
import { BsQuestionCircle, BsArrowRight } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import HelpCenterHeader from "./HelpCenterHeader";

class HelpCenter extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <HelpCenterHeader />
          <div
            className="container-fluid p-0 m-0"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="help-center-hero">
              <h1 style={{ textTransform: "uppercase" }}>How can we help?</h1>
              <div className="input-group mt-3" id="help-center-input">
                <input
                  className="form-control"
                  placeholder="eg. How to sell on way4Biz?"
                />
                <div className="input-group-append">
                  <div
                    style={{
                      backgroundColor: "#f76b1a",
                      width: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AiOutlineSearch
                      style={{ fontSize: "20px", color: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-md-4 help-center-card">
                  <BsQuestionCircle style={{ fontSize: "80px" }} />
                  <h5 className="my-2">Who we are?</h5>
                  <p>
                    <span className="help-center-text">
                      We are a 2 in 1 company specializing in marketing and
                      delivery of retailers goods to customers.
                    </span>

                    <Link
                      to="about-us"
                      className="ml-1 help-center-learn-more-link"
                    >
                      Learn More <BsArrowRight />
                    </Link>
                  </p>
                </div>
                <div className="col-md-4 help-center-card">
                  <RiBookletLine style={{ fontSize: "80px" }} />
                  <h5 className="my-2">Our Client Policy</h5>
                  <p>
                    <span className="help-center-text">
                      The quick brown fox jumped over the lazy dog.The quick
                      brown fox.
                    </span>

                    <Link
                      to="about-us"
                      className="ml-1 help-center-learn-more-link"
                    >
                      Learn More <BsArrowRight />
                    </Link>
                  </p>
                </div>
                <div className="col-md-4 help-center-card">
                  <FiMail style={{ fontSize: "80px" }} />
                  <h5 className="my-2">Contact Us</h5>
                  <p>
                    <span className="help-center-text">
                      Our passionate help team is there to assist you whenever
                      you need help instantly.
                    </span>

                    <Link
                      to="contact-us"
                      className="ml-1 help-center-learn-more-link"
                    >
                      Get In Touch <BsArrowRight />
                    </Link>
                  </p>
                </div>
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
