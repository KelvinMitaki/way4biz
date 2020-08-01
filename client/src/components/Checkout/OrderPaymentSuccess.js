import React from "react";

import "./OrderPaymentSuccess.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

class OrderPaymentSuccess extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <div className="box-container py-3 pl-2 pr-1">
                  <h3>We've got it!</h3>
                  <h6>
                    Your order has been placed.We have also sent an email
                    confirmation.You can check the status of{" "}
                    <Link to="/">Order 12345678</Link> at any time from your
                    account.
                  </h6>
                  <div className="row">
                    <div className="col-3">
                      <img src="/1.jpg" width="100%" />
                    </div>
                    <div className="col-9">
                      <h5>Great Beer</h5>
                      <p></p>
                    </div>
                  </div>
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

export default OrderPaymentSuccess;
