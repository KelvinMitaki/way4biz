import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryHeader.css";
import { connect } from "react-redux";
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";

class SecondaryHeader extends React.Component {
  render() {
    return (
      <div className="secondary-header d-flex primary-background">
        <div id="large-screen-secondary-header" className="d-flex">
          {!this.props.isSignedIn && (
            <Link className="mx-4 secondary-header-link" to="/seller/register">
              Sell with us
            </Link>
          )}
          {/* <Link className="mx-4 secondary-header-link" to="/customer-service">
            Customer Service
          </Link>
          <Link className="mx-4 secondary-header-link" to="/support-center">
            Support Center
          </Link> */}
          <Link className="mx-4 secondary-header-link" to="/logistics">
            Logistics Services
          </Link>
          <Link className="mx-4 secondary-header-link" to="/">
            Help
          </Link>
          {/* <Link className="mx-4 secondary-header-link" to="/contact-us">
            Contact Us
          </Link> */}
          {/* <Link className="mx-4 secondary-header-link" to="/privacy-policy">
            Privacy Policy
          </Link> */}
          {/* <Link className="mx-4 secondary-header-link" to="/contact-developers">
            Contact Developers
          </Link> */}
        </div>
        <div id="small-screen-secondary-header">
          <div className="small-screen-secondary-header-items">
            {!this.props.isSignedIn && (
              <Link
                className="small-screen-secondary-header-link"
                to="/seller/register"
              >
                Sell with us
              </Link>
            )}

            {/* <Link
              className="small-screen-secondary-header-link"
              to="/customer-service"
            >
              Customer Service
            </Link>

            <Link
              className="small-screen-secondary-header-link"
              to="/support-center"
            >
              Support Center
            </Link> */}
            <Link
              className="small-screen-secondary-header-link"
              to="/logistics"
            >
              Logistics Services
            </Link>
            <Link
              className="mx-4 small-screen-secondary-header-link"
              to="/about-us"
            >
              Help
            </Link>
            <Link
              className="mx-4 small-screen-secondary-header-link"
              to="/contact-us"
            >
              Contact Us
            </Link>
            {/* <Link
              className="small-screen-secondary-header-link"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link> */}
            {/* <Link
              className="small-screen-secondary-header-link"
              to="/contact-developers"
            >
              Contact Developers
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(SecondaryHeader);
