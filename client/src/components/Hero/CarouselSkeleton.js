import React from "react";
import Skeleton from "../Pages/Skeleton";

import { Carousel } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { signInClick, registerClick } from "../../redux/actions";
import { MdRateReview } from "react-icons/md";
import { GoClippy } from "react-icons/go";

class CarouselSkeleton extends React.Component {
  render() {
    return (
      <div className="hero-main-wrapper">
        <div id="hero-main-wrapper-left">
          <div className="hero-carousel-wrapper">
            <Skeleton elemClass={"hero-carousel"} />
          </div>
          <div className="random-stuff-wrapper">
            <div className="random-stuff">
              {Array(4)
                .fill("")
                .map(() => {
                  return (
                    <React.Fragment>
                      <Skeleton elemClass={"hero-random-image"} />
                      {/* <Skeleton elemClass={"hero-product-name"} />
                      <Skeleton elemClass={"hero-product-price"} /> */}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
        <div id="hero-main-wrapper-right">
          <div className="hero-account-section">
            <div className="d-flex justify-content-center flex-column align-items-center"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselSkeleton;
