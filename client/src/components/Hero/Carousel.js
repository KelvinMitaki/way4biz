import React from "react";
import { Carousel } from "react-bootstrap";

import "./Carousel.css";

class HeroCarousel extends React.Component {
  render() {
    return (
      <Carousel className="hero-carousel">
        <Carousel.Item className="slider">
          <img className="img-fluid slider" src="j.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img className="img-fluid slider" src="p.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img className="img-fluid" src="k.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HeroCarousel;
