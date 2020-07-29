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
import ScreenLoader from "../Pages/ScreenLoader";
import Image from "../Market/Image";
import CategoryHoverPopup from "./CategoryHoverPopup";

class HeroCarousel extends React.Component {
  shouldComponentUpdate(nextprops, nextState) {
    if (this.props.products) {
      return false;
    } else if (this.props.subCategories.length > 0) {
      return true;
    }
  }

  handleMouseEnter = () => {
    // clean array
  };
  render() {
    if (this.props.products.length === 0) return <ScreenLoader />;

    const randomStop = Math.ceil(Math.random() * this.props.products.length);
    const randomStart = randomStop < 4 ? randomStop + 4 : randomStop - 4;

    let trimmedProducts = this.props.products.slice(
      randomStart > randomStop ? randomStop : randomStart,
      randomStop > randomStart ? randomStop : randomStart
    );
    if (trimmedProducts.length < 4) {
      trimmedProducts = [
        ...trimmedProducts,
        ...this.props.products.slice(
          randomStop,
          randomStop > this.props.products.length ? randomStop - 4 : +1
        ),
      ];
    }
    return (
      <div className="hero-main-wrapper">
        <div id="hero-main-wrapper-left">
          {/* if subcategories array length>1 */}
          <CategoryHoverPopup />
          {/* else null */}
          <div className="hero-carousel-wrapper">
            <div className="hero-carousel">
              <Carousel id="hero-sliders">
                <Carousel.Item className="slider">
                  <img className="img-fluid" src="j.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className="slider">
                  <img className="img-fluid" src="p.jpg" alt="Second slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="random-stuff-wrapper">
            <div className="random-stuff">
              {trimmedProducts &&
                trimmedProducts.map((prod) => (
                  <div
                    key={prod._id}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      this.props.history.push(`/product/${prod._id}`)
                    }
                  >
                    <Image
                      height="120vh"
                      width="120vw"
                      image={
                        prod.imageUrl[0].includes("http")
                          ? prod.imageUrl[0]
                          : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${prod.imageUrl[0]} `
                      }
                      alt={prod.name}
                      className="hero-random-image"
                    />

                    <h6 className="hero-product-name">{prod.name}</h6>

                    <p className="hero-product-price">
                      <small>Ksh.{prod.price.toLocaleString()}</small>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div id="hero-main-wrapper-right" onMouseEnter={this.handleMouseEnter}>
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
                    <Link to="/pending/reviews" className="hero-account-link">
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
    );
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
