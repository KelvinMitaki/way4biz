import React from "react";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Carousel.css";

class HeroCarousel extends React.Component {
  render() {
    return (
      <div className="hero-main-wrapper">
        <div id="hero-main-wrapper-left">
          <div className="hero-carousel-wrapper">
            <div className="hero-carousel">
              <Carousel id="hero-sliders">
                <Carousel.Item className="slider">
                  <img className="img-fluid" src="j.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className="slider">
                  <img className="img-fluid" src="p.jpg" alt="Second slide" />
                </Carousel.Item>
                {/* <Carousel.Item className="slider">
                  <img className="img-fluid" src="k.png" alt="Third slide" />
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
          <div className="random-stuff-wrapper">
            <div className="random-stuff">
              <div>
                <img src="1.jpg" />
                <h6>Stuff</h6>
              </div>
              <div>
                <img src="1.jpg" />
                <h6>Stuff</h6>
              </div>
              <div>
                <img src="1.jpg" />
                <h6>Stuff</h6>
              </div>
              <div>
                <img src="1.jpg" />
                <h6>Stuff</h6>
              </div>
            </div>
          </div>
        </div>
        <div id="hero-main-wrapper-right">
          <div className="hero-account-section">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <IconContext.Provider value={{ className: "hero-user" }}>
                <FaUserCircle />
              </IconContext.Provider>
              <p className="mt-3" style={{ fontWeight: "bolder" }}>
                Welcome Here
              </p>
            </div>
            <div className="hero-auth-btns my-4">
              <Link to="/" className="btn btn-md sign-in-hero-btn">
                Sign In
              </Link>
              <Link to="/" className="btn btn-md join-hero-btn">
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCarousel;
