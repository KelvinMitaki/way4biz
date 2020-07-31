import React from "react";

import "./MpesaPayment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { Link } from "react-router-dom";

class MpesaPayment extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <div className="box-container">
                  <h5>
                    <Link to="/checkout">Change Payment Method</Link>
                  </h5>
                  <h3 style={{ textAlign: "center" }}>Mpesa Payment</h3>
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

export default MpesaPayment;
