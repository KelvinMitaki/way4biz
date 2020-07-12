import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryHeader.css";
import { connect } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

class SecondaryHeader extends React.Component {
  render() {
    // const responsive = {
    //   screenBreakpoints: {
    //     breakpoint: {
    //       max: 960,
    //       min: 0,
    //     },
    //     items: 2,
    //   },
    // };

    const responsive = {
      tablet: {
        breakpoint: { max: 960, min: 541 },
        items: 3
      },
      iphone: {
        breakpoint: { max: 540, min: 0 },
        items: 2
      }
    };
    return (
      <div className="secondary-header d-flex primary-background">
        <div id="large-screen-secondary-header" className="d-flex">
          {!this.props.isSignedIn && (
            <Link className="mx-4 secondary-header-link" to="/seller/register">
              Sell with us
            </Link>
          )}
          <Link className="mx-4 secondary-header-link" to="/customer-service">
            Customer Service
          </Link>
          <Link className="mx-4 secondary-header-link" to="/support-center">
            Support Center
          </Link>
          <Link className="mx-4 secondary-header-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <div id="small-screen-secondary-header">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet", "iphone"]}
            autoPlay={true}
            containerClass={"owl-carousel-header"}
            infinite={true}
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
            <Link className="carousel-link" to="/privacy-policy">
              Privacy Policy
            </Link>
          </Carousel>
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
