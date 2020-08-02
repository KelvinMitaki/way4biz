import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { Link, Redirect } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./MpesaError.css";

class MpesaError extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <div className="box-container py-3 pl-2 pr-1">
                  <div className="d-flex mb-3 align-items-center justify-content-center mb-3">
                    <AiOutlineExclamationCircle
                      style={{ fontSize: "100px", color: "#f76b1a" }}
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>
                    Ooops! Something is wrong.
                  </h2>

                  <ul className="mpesa-error-guides">
                    <li>
                      <p>Ensure you are using a safaricom registered number.</p>
                    </li>
                    <li>
                      <p>Ensure your pin is correct.</p>
                    </li>
                    <li>
                      <p>
                        Ensure you have sufficient funds to make the
                        transaction.
                      </p>
                    </li>
                  </ul>
                  <h6 className="my-2">
                    You can also try other payment methods.
                  </h6>
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

export default MpesaError;
