import React from "react";
import "./PendingReviews.css";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { MdRateReview } from "react-icons/md";

class PendingReviews extends React.Component {
  render() {
    return (
      <div>
        <AccountHeader />
        <div className="container pending-reviews-wrapper">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8  box-container">
              {/* show if no pending reviews */}
              {/* <div className="container-fluid buyer-no-pending-reviews">
                <IconContext.Provider value={{ className: "no-reviews-icon" }}>
                  <MdRateReview />
                </IconContext.Provider>
                <p className="mt-3">
                  You have no orders with pending reviews yet. Orders delivered
                  to you will appear here for you to review and rate them
                </p>
                <Link
                  to="/"
                  className="btn btn-md mt-3 pending-review-shopping-btn"
                >
                  Continue Shopping
                </Link>
              </div> */}
              {/* show if there is pending reviews */}
              <div className="container-fluid buyer-pending-reviews">
                <h4>Pending Reviews</h4>
                <div className="buyer-pending-reviews-wrapper mt-2 container">
                  {/* mapping takes place here */}
                  <div className="buyer-pending-review box-container row">
                    <div className="col-md-10 d-flex">
                      <img src="/1.jpg" />
                      <div id="buyer-review-product-name">
                        <h6>
                          Test Seller With This Test Seller With This Test
                          Seller With This Test Seller With This
                        </h6>
                        <p>Ksh.30,0000</p>
                      </div>
                    </div>
                    <div className="col-md-2 rate-link-wrapper">
                      <Link to="/add/review">Rate</Link>
                    </div>
                  </div>
                  <div className="buyer-pending-review box-container row">
                    <div className="col-md-10 d-flex">
                      <img src="/1.jpg" />
                      <div id="buyer-review-product-name">
                        <h6>
                          Test Seller With This Test Seller With This Test
                          Seller With This Test Seller With This
                        </h6>
                        <p>Ksh.30,0000</p>
                      </div>
                    </div>
                    <div className="col-md-2 rate-link-wrapper">
                      <Link to="/">Rate</Link>
                    </div>
                  </div>
                  <div className="buyer-pending-review box-container row">
                    <div className="col-md-10 d-flex">
                      <img src="/1.jpg" />
                      <div id="buyer-review-product-name">
                        <h6>
                          Test Seller With This Test Seller With This Test
                          Seller With This Test Seller With This
                        </h6>
                        <p>Ksh.30,0000</p>
                      </div>
                    </div>
                    <div className="col-md-2 rate-link-wrapper">
                      <Link to="/">Rate</Link>
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

export default PendingReviews;
