import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./SecondaryHeader.css";
import { connect } from "react-redux";

class SecondaryHeader extends React.Component {
  render() {
    return (
      <div className="secondary-header d-flex primary-background">
        <div id="large-screen-secondary-header" className="d-flex">
          {!this.props.isSignedIn && (
            <Link
              // activeClassName="secondary-header-active"
              className="mx-4 secondary-header-link"
              to="/seller/register"
            >
              Sell with us
            </Link>
          )}
          <Link className="mx-4 secondary-header-link" to="/customer-service">
            Customer Service
          </Link>
          <Link className="mx-4 secondary-header-link" to="/support-center">
            Support Center
          </Link>
          <Link className="mx-4 secondary-header-link" to="terms-conditions">
            Terms and Conditions
          </Link>
        </div>
        <div id="small-screen-secondary-header">
          <OwlCarousel
            className="owl-carousel-header primary-background"
            items={2}
            loop={true}
            autoplay={true}
            autoplayTimeout={3000}
          >
            {!this.props.isSignedIn && (
              <Link className="carousel-link" to="/seller/register">
                Sell with us
              </Link>
            )}

            <Link className="carousel-link" to="/customer-service">
              Customer Service
            </Link>
            <Link className="carousel-link" to="/support-center">
              Support Center
            </Link>
            <Link className="carousel-link" to="terms-conditions">
              Terms and Conditions
            </Link>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(SecondaryHeader);
