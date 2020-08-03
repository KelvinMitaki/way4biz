import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer primary-background">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3">
              <h6>About Way4Biz</h6>
              <div className="site-footer-info">
                <p>
                  <Link to="/about-us">About Us</Link>
                </p>
                <p>
                  <Link to="/terms">Terms and Conditions</Link>
                </p>
                <p>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h6>Help Center</h6>
              <div className="site-footer-info">
                <p>
                  <Link to="/contact">Contact Us</Link>
                </p>
                <p>
                  <Link to="/how-to-shop?">How to shop on Way4Biz?</Link>
                </p>
                <p>
                  <Link to="/how-to-sell?">How to sell on Way4Biz?</Link>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h6>Make Money On Way4Biz</h6>
              <div className="site-footer-info">
                <p>
                  {this.props.user && this.props.user.isSeller && (
                    <Link to="/seller/sell">Sell on Way4Biz</Link>
                  )}
                  {!this.props.user && (
                    <Link to="/seller/register">Sell on Way4Biz</Link>
                  )}
                  {/* <Link to="/">Sell on Way4Biz</Link> */}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h6>Payment Methods</h6>
              <div className="site-footer-info">
                <div className="mb-2">
                  <img title="mpesa" src="/mpesa.png" alt="mpesa" />
                </div>
                <div>
                  <img title="visa" src="/debit.png" alt="debit" />
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ borderTop: "1px solid #eaecee" }}>
            <div className="col copyright">
              <p>&copy;{1900 + new Date().getYear()}. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(Footer);
