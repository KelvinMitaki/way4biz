import React from "react";

import "./HelpCenter.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { AiOutlineSearch, AiFillMail } from "react-icons/ai";
import { BsExclamationCircle, BsArrowRight } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

class HelpCenter extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div
            className="container-fluid p-0 m-0"
            style={{ backgroundColor: "#fff" }}
          >
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
            <div className="container my-4">
              <div className="row">
                <div className="col-md-4 help-center-card">
                  <BsExclamationCircle style={{ fontSize: "80px" }} />
                  <h3 className="my-2">Who we are?</h3>
                  <p>
                    We are a 2 in 1 company specializing in marketing and
                    delivery.
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
                  <h3 className="my-2">Our Client Policy</h3>
                  <p>
                    The quick brown fox jumped over the lazy dog.The quick brown
                    fox jumped over the lazy dog.
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
                  <h3 className="my-2">Contact Us</h3>
                  <p>
                    Our contact team is there to assist you whenever you need
                    help instantly.
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
