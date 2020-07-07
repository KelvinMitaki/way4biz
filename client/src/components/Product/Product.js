import React from "react";
import ReactImageMagnify from "react-image-magnify";
import OwlCarousel from "react-owl-carousel";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
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
  removeFromWishlist
} from "../../redux/actions";
import { IconContext } from "react-icons/lib";
import ProductSecondaryDetails from "./ProductSecondaryDetails";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      clicked: false
      // imgUrl: this.props.product.imageUrl,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
        src: product.imageUrl
      },
      largeImage: {
        src: product.imageUrl,
        width: 1200,
        height: 1800
      },
      enlargedImageContainerStyle: { background: "#fff", zIndex: 9 }
    };
  }

  render() {
    if (this.props.product) {
      const { stockQuantity } = this.props.product;

      const itemInWishlist = this.props.wishlist.find(
        item => item._id === this.props.product._id
      );
      return (
        <React.Fragment>
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
                  <ReactImageMagnify {...this.getImageProps()} />
                  <div className="feature-imgs d-flex">
                    <OwlCarousel
                      items={5}
                      loop={true}
                      autoplay={true}
                      autoplayTimeout={10000}
                      dots={true}
                      className="product-owl-carousel"
                    >
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                      <div>
                        <img
                          src={this.props.product.imageUrl}
                          alt={this.props.product.name}
                        />
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-lg-6 product-info pt-2">
                  {stockQuantity > 0 ? (
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
                      {this.state.clicked || itemInWishlist ? (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            this.props.removeFromWishlist(this.props.product);
                            this.setState({ clicked: false });
                          }}
                        >
                          <IoMdHeart />
                        </div>
                      ) : (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            this.props.addToWishlist(this.props.product);
                            this.setState({ clicked: true });
                          }}
                        >
                          <IoMdHeartEmpty />
                        </div>
                      )}
                    </IconContext.Provider>
                  </div>
                  <div className="product-rating">
                    <Rating size={20} />
                    <span className="ml-2">
                      <Link style={{ color: "#f76b1a" }} to="/">
                        (0 Reviews)
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
                      disabled={this.props.product.stockQuantity === 0}
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
              <div className="row product-features-reviews-specifications">
                <div className="col-lg-2 product-features-reviews-specifications-sidebar">
                  <div>
                    <p>Seller Store Details Here</p>
                  </div>
                </div>
                <div className="col-lg-10 p-0">
                  <ProductSecondaryDetails
                    details={this.props.product.description}
                    specifications={this.props.product.specifications}
                  />
                </div>
              </div>
            </div>
          )}
          <Footer />
          <MiniMenuWrapper />
        </React.Fragment>
      );
    }
    return null;
  }
}
const mapStateToProps = (state, ownProps) => {
  let product;
  if (state.product.products.length !== 0) {
    product = state.product.products.find(
      product =>
        product._id.toString() === [ownProps.match.params.productId].toString()
    );
  }
  return {
    product,
    wishlist: state.cartReducer.wishlist
  };
};
export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  removeFromWishlist
})(Product);
