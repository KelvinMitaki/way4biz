import React from "react";
import { Carousel } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

import "./Carousel.css";
import { connect } from "react-redux";
import { signInClick, registerClick } from "../../redux/actions";
import { MdRateReview } from "react-icons/md";
import { GoClippy } from "react-icons/go";
import CarouselSkeleton from "./CarouselSkeleton";

class HeroCarousel extends React.Component {
  state = {
    item1: null,
    item2: null,
    item3: null,
    item4: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);

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
    const { loading } = this.state;

    // if (this.props.products.length !== 0) {
    return (
      <React.Fragment>
        {loading && <CarouselSkeleton />}
        {!loading && (
          <div className="hero-main-wrapper">
            <div id="hero-main-wrapper-left">
              <div className="hero-carousel-wrapper">
                <div className="hero-carousel">
                  <Carousel id="hero-sliders">
                    <Carousel.Item className="slider">
                      <img
                        className="img-fluid"
                        src="j.jpg"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item className="slider">
                      <img
                        className="img-fluid"
                        src="p.jpg"
                        alt="Second slide"
                      />
                    </Carousel.Item>
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
                        <div className="hero-random-image-wrapper">
                          <img
                            src={this.state.item1.imageUrl}
                            alt={this.state.item1.name}
                            className="hero-random-image"
                          />
                        </div>
                        <div>
                          <h6 className="hero-product-name">
                            {this.state.item1.name}
                          </h6>
                        </div>
                        <div>
                          <p className="hero-product-price">
                            <small>Ksh.{this.state.item1.price}</small>
                          </p>
                        </div>
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
                          className="hero-random-image"
                        />

                        <h6 className="hero-product-name">
                          {this.state.item2.name}
                        </h6>
                        <p className="hero-product-price">
                          <small>Ksh.{this.state.item2.price}</small>
                        </p>
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
                          className="hero-random-image"
                        />

                        <h6 className="hero-product-name">
                          {this.state.item3.name}
                        </h6>
                        <p className="hero-product-price">
                          <small>Ksh.{this.state.item3.price}</small>
                        </p>
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
                          className="hero-random-image"
                        />

                        <h6 className="hero-product-name">
                          {this.state.item4.name}
                        </h6>
                        <p className="hero-product-price">
                          <small>Ksh.{this.state.item4.price}</small>
                        </p>
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
                    {this.props.user ? (
                      <React.Fragment>
                        <FaUserCircle />
                        <strong>Hi, {this.props.user.firstName}</strong>
                      </React.Fragment>
                    ) : (
                      <FaUserCircle />
                    )}
                  </IconContext.Provider>
                  {!this.props.user ? (
                    <p className="mt-3" style={{ fontWeight: "bolder" }}>
                      Welcome to Way4Biz
                    </p>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                      }}
                      className="mt-4"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Link to="/account" className="hero-account-link">
                          <div className="hero-account-icon-wrapper">
                            <FaUserAlt />
                          </div>

                          <p>Account</p>
                        </Link>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Link to="/orders" className="hero-account-link">
                          <div className="hero-account-icon-wrapper">
                            <GoClippy />
                          </div>
                          <p>Orders</p>
                        </Link>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Link
                          to="/pending/reviews"
                          className="hero-account-link"
                        >
                          <div className="hero-account-icon-wrapper">
                            <MdRateReview />
                          </div>

                          <p> Reviews</p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {!this.props.user ? (
                  <div className="hero-auth-btns my-4">
                    <Link
                      onClick={() => this.props.signInClick()}
                      to="/sign-in"
                      className="btn btn-md sign-in-hero-btn"
                    >
                      Sign In
                    </Link>
                    <Link
                      onClick={() => this.props.registerClick()}
                      to="/sign-in"
                      className="btn btn-md join-hero-btn"
                    >
                      Join
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
    // }
    // }
    // return null;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    user: state.auth.user,
  };
};
export default withRouter(
  connect(mapStateToProps, { registerClick, signInClick })(HeroCarousel)
);
