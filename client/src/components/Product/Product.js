import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import "./Product.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import AddToCartModalButton from "./AddToCartModalButton";
import Rating from "./Rating";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  fetchSingleProduct,
  fetchRelatedProducts
} from "../../redux/actions";
import { IconContext } from "react-icons/lib";
import ProductSecondaryDetails from "./ProductSecondaryDetails";
import { Link, withRouter } from "react-router-dom";
import ScreenLoader from "../Pages/ScreenLoader";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "../Market/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.product &&
      this.props.fetchRelatedProducts(this.props.product.subcategory);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.product) {
      this.props.product &&
        this.props.product.subcategory &&
        this.props.fetchRelatedProducts(this.props.product.subcategory);
    }
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (
      prevProps.relatedProducts.length !== this.props.relatedProducts.length ||
      prevProps.productReviews.length !== this.props.productReviews.length ||
      prevState.modalShow !== this.state.modalShow ||
      this.state.clicked !== prevState.clicked ||
      this.props.product
    ) {
      return true;
    }
    return false;
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        modalShow: !prevState.modalShow
      };
    });
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        modalShow: !prevState.modalShow
      };
    });
  }

  getImageProps() {
    const { product } = this.props;
    return {
      smallImage: {
        alt: product.name,
        isFluidWidth: true,
        // width:100%,
        src: product.imageUrl[0].includes("http")
          ? product.imageUrl[0]
          : ` https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl[0]}`
      },
      largeImage: {
        src: product.imageUrl[0].includes("http")
          ? product.imageUrl[0]
          : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl[0]} `,
        width: 1000,
        height: 1000
      },
      enlargedImageContainerStyle: { background: "#fff", zIndex: 9 }
    };
  }

  render() {
    const stockQuantity =
      this.props.product && this.props.product.stockQuantity;
    const itemInWishlist =
      this.props.product &&
      this.props.wishlist.find(
        item => item._id.toString() === this.props.product._id.toString()
      );
    let itemInCart = false;
    itemInCart =
      this.props.product &&
      this.props.product._id &&
      this.props.cart &&
      this.props.cart.find(item => item._id === this.props.product._id);

    const carouselSettings = {
      // dots: true,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    if (!this.props.product || this.props.saveWishlistLoading)
      return <ScreenLoader />;
    return (
      <div className="main">
        <div className="content">
          <Header />
          {this.props.product && (
            <div className="container-fluid product-wrapper">
              {this.state.modalShow ? (
                <div
                  onClick={this.handleCloseModal}
                  className="back-shed"
                ></div>
              ) : null}
              <div className="row" id="product">
                <div className="col-lg-6 product-imgs">
                  <ReactImageMagnify
                    enlargedImagePosition={"over"}
                    {...this.getImageProps()}
                  />

                  <div className="feature-imgs">
                    <Slider {...carouselSettings} className="product-carousel">
                      <div>
                        <img
                          className="product-carousel-img"
                          src={
                            this.props.product.imageUrl[0].includes("http")
                              ? this.props.product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${this.props.product.imageUrl[0]} `
                          }
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          className="product-carousel-img"
                          src={
                            this.props.product.imageUrl[0].includes("http")
                              ? this.props.product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${this.props.product.imageUrl[0]} `
                          }
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          className="product-carousel-img"
                          src={
                            this.props.product.imageUrl[0].includes("http")
                              ? this.props.product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${this.props.product.imageUrl[0]} `
                          }
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          className="product-carousel-img"
                          src={
                            this.props.product.imageUrl[0].includes("http")
                              ? this.props.product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${this.props.product.imageUrl[0]} `
                          }
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          className="product-carousel-img"
                          src={
                            this.props.product.imageUrl[0].includes("http")
                              ? this.props.product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${this.props.product.imageUrl[0]} `
                          }
                          alt={this.props.product.name}
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="col-lg-6 product-info pt-2">
                  {stockQuantity >= 1 ? (
                    <span className="badge stock-badge in-stock-badge">
                      In Stock
                    </span>
                  ) : (
                    <span className="badge stock-badge out-of-stock-badge">
                      Out Of Stock
                    </span>
                  )}

                  <div className="product-name-wishlist">
                    <h5 className="mr-2">{this.props.product.name}</h5>
                    <IconContext.Provider
                      value={{ size: "2em", color: "#f76b1a" }}
                    >
                      {itemInWishlist && (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            this.props.removeFromWishlist(this.props.product);
                          }}
                        >
                          <IoMdHeart />
                        </div>
                      )}
                      {!itemInWishlist && (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            if (!this.props.isSignedIn) {
                              return this.props.history.push("/sign-in");
                            }
                            this.props.addToWishlist(this.props.product);
                          }}
                        >
                          <IoMdHeartEmpty />
                        </div>
                      )}
                    </IconContext.Provider>
                  </div>
                  <div className="product-store">
                    <IconContext.Provider
                      value={{ className: "product-store-icon-wrapper" }}
                    >
                      <FaStore />
                    </IconContext.Provider>
                    <p>
                      <span
                        style={{ cursor: "pointer", display: "inline-block" }}
                        onClick={() =>
                          this.props.history.push(
                            `/seller/store/${this.props.product.seller._id}`
                          )
                        }
                        className="store-name ml-2"
                      >
                        {this.props.product.seller.storeName}
                      </span>
                    </p>
                  </div>
                  <div className="product-rating">
                    {this.props.productReviews.length !== 0 ? (
                      <React.Fragment>
                        <Rating
                          key={this.props.productReviews.length}
                          size={18}
                          clickable={false}
                          value={Math.round(
                            this.props.productReviews
                              .map(p => p.rating)
                              .reduce((acc, cur) => acc + cur, 0) /
                              this.props.productReviews.length
                          )}
                        />
                      </React.Fragment>
                    ) : (
                      <Rating size={18} clickable={false} value={0} />
                    )}

                    <span className="ml-2">
                      <Link
                        style={{ color: "#f76b1a" }}
                        to={`/product/main/reviews/${this.props.product._id}`}
                      >
                        (
                        {this.props.productReviews.length === 1 ? (
                          <span>{this.props.productReviews.length} Review</span>
                        ) : (
                          <span>
                            {this.props.productReviews.length} Reviews
                          </span>
                        )}{" "}
                        )
                      </Link>
                    </span>
                  </div>
                  <div className="product-price">
                    <h4>Ksh.{this.props.product.price.toLocaleString()}</h4>
                  </div>

                  <div>
                    <button
                      className="btn btn-md my-3 add-to-cart btn-block"
                      onClick={this.handleClick}
                      disabled={
                        this.props.product.stockQuantity <= 0 ||
                        (itemInCart &&
                          itemInCart.quantity >=
                            this.props.product.stockQuantity)
                      }
                    >
                      Add to Cart
                    </button>
                    <AddToCartModalButton
                      className="modal"
                      show={this.state.modalShow}
                      close={this.handleCloseModal}
                    ></AddToCartModalButton>
                  </div>
                </div>
              </div>
              <div className="related-products">
                <h3>Related Products</h3>
                {this.props.relatedProducts === 0 ? null : (
                  <div className="related-products-wrapper">
                    {this.props.relatedProducts.length !== 0 &&
                      this.props.relatedProducts.map(item => (
                        <Link key={item._id} to={`/product/${item._id}`}>
                          <div key={item._id} className="related-product">
                            <Image
                              image={
                                item.imageUrl[0].includes("http")
                                  ? item.imageUrl[0]
                                  : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${item.imageUrl[0]} `
                              }
                              alt={item.name}
                            />
                            <p className="related-product-name">{item.name}</p>
                            <p style={{ fontWeight: "bolder" }}>
                              Ksh.{item.price.toLocaleString()}{" "}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                )}

                <div className="row product-features-reviews-specifications mt-3">
                  <div className="col p-0">
                    <ProductSecondaryDetails
                      details={this.props.product.description}
                    />
                  </div>
                </div>
                {/* <div>
                  <h3>Recommended For You</h3>
                  <div className="recommended-products-wrapper">
                    {this.props.relatedProducts.length !== 0 &&
                      this.props.relatedProducts.map(item => (
                        <a key={item._id} href={`/product/${item._id}`}>
                          <div key={item._id} className="recommended-product">
                            <img src={item.imageUrl[0]} alt={item.name} />
                            <p className="recommended-product-name">
                              {item.name}
                            </p>
                            <p style={{ fontWeight: "bolder" }}>
                              Ksh.{item.price.toLocaleString()}{" "}
                            </p>
                          </div>
                        </a>
                      ))}
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let product;
  if (state.product.products.length !== 0) {
    product = state.product.product;
  }
  return {
    product,
    wishlist: state.cartReducer.wishlist,
    saveWishlistLoading: state.cartReducer.saveWishlistLoading,
    cart: state.cartReducer.cart,
    relatedProducts: state.product.relatedProducts,
    productReviews: state.product.productReviews,
    isSignedIn: state.auth.isSignedIn
  };
};
export default withRouter(
  connect(mapStateToProps, {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    fetchSingleProduct,
    fetchRelatedProducts
  })(Product)
);
