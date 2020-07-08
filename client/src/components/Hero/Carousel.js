import React from "react";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

import "./Carousel.css";
import { connect } from "react-redux";

class HeroCarousel extends React.Component {
  state = {
    item1: null,
    item2: null,
    item3: null,
    item4: null,
  };
  componentDidMount() {
    this.setState({
      item1: this.props.products[
        Math.floor(Math.random() * this.props.products.length)
      ],
    });
    this.setState({
      item2: this.props.products[
        Math.floor(Math.random() * this.props.products.length)
      ],
    });
    this.setState({
      item3: this.props.products[
        Math.floor(Math.random() * this.props.products.length)
      ],
    });
    this.setState({
      item4: this.props.products[
        Math.floor(Math.random() * this.props.products.length)
      ],
    });
  }

  render() {
    if (this.props.products.length !== 0) {
      // const randomStop = Math.ceil(Math.random() * this.props.products.length);
      // const randomStart = randomStop < 4 ? randomStop + 4 : randomStop - 4;
      // const trimmedProducts = this.props.products.slice(
      //   randomStart,
      //   randomStop
      // );

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
                {this.state.item1 && (
                  <React.Fragment>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.history.push(
                          `/product/${this.state.item1._id}`
                        )
                      }
                    >
                      <img
                        src={this.state.item1.imageUrl}
                        alt={this.state.item1.name}
                      />
                      <h6 className="hero-product-name">
                        {this.state.item1.name}
                      </h6>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.history.push(
                          `/product/${this.state.item2._id}`
                        )
                      }
                    >
                      <img
                        src={this.state.item2.imageUrl}
                        alt={this.state.item2.name}
                      />
                      <h6 className="hero-product-name">
                        {this.state.item2.name}
                      </h6>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.history.push(
                          `/product/${this.state.item3._id}`
                        )
                      }
                    >
                      <img
                        src={this.state.item3.imageUrl}
                        alt={this.state.item3.name}
                      />
                      <h6 className="hero-product-name">
                        {this.state.item3.name}
                      </h6>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.history.push(
                          `/product/${this.state.item4._id}`
                        )
                      }
                    >
                      <img
                        src={this.state.item4.imageUrl}
                        alt={this.state.item4.name}
                      />
                      <h6 className="hero-product-name">
                        {this.state.item4.name}
                      </h6>
                    </div>
                  </React.Fragment>
                )}
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
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default withRouter(connect(mapStateToProps)(HeroCarousel));
