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
  fetchRelatedProducts,
} from "../../redux/actions";
import { IconContext } from "react-icons/lib";
import ProductSecondaryDetails from "./ProductSecondaryDetails";
import { Link, withRouter } from "react-router-dom";
import ScreenLoader from "../Pages/ScreenLoader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      clicked: false,
      // imgUrl: this.props.product.imageUrl,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    this.props.product &&
      this.props.fetchRelatedProducts(this.props.product.subcategory);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.product) {
      console.log(this.props.product);
      this.props.fetchRelatedProducts(this.props.product.subcategory);
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        modalShow: !prevState.modalShow,
      };
    });
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        modalShow: !prevState.modalShow,
      };
    });
  }

  getImageProps() {
    const { product } = this.props;
    return {
      smallImage: {
        alt: product.name,
        isFluidWidth: true,
        src: product.imageUrl,
      },
      largeImage: {
        src: product.imageUrl,
        width: 1000,
        height: 1000,
      },
      enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    };
  }

  render() {
    const stockQuantity =
      this.props.product && this.props.product.stockQuantity;
    const itemInWishlist = this.props.wishlist.find(
      (item) => item._id === this.props.product && this.props.product._id
    );
    let itemInCart = false;
    itemInCart = this.props.cart.find(
      (item) => item._id === this.props.product && this.props.product._id
    );

    if (!this.props.product) return <ScreenLoader />;
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
                    <OwlCarousel
                      dots={true}
                      items={4}
                      className="product-owl-carousel"
                      autoplay={true}
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
                    </OwlCarousel>
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
                  <div className="product-store">
                    <IconContext.Provider
                      value={{ className: "product-store-icon-wrapper" }}
                    >
                      <FaStore />
                    </IconContext.Provider>
                    <p className="store-name ml-2">
                      {this.props.product.seller.storeName}
                    </p>
                  </div>
                  <div className="product-rating">
                    {this.props.productReviews.length !== 0 ? (
                      <React.Fragment>
                        <Rating
                          size={18}
                          clickable={false}
                          value={Math.round(
                            this.props.productReviews
                              .map((p) => p.rating)
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
                        this.props.product.stockQuantity === 0 ||
                        (itemInCart &&
                          itemInCart.quantity ===
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
                <div className="related-products-wrapper">
                  {this.props.relatedProducts.length !== 0 &&
                    this.props.relatedProducts.map((item) => (
                      <a key={item._id} href={`/product/${item._id}`}>
                        <div key={item._id} className="related-product">
                          <img src={item.imageUrl} alt={item.name} />
                          <p className="related-product-name">{item.name}</p>
                          <p style={{ fontWeight: "bolder" }}>
                            Ksh.{item.price.toLocaleString()}{" "}
                          </p>
                        </div>
                      </a>
                    ))}
                </div>
                <div className="row product-features-reviews-specifications mt-3">
                  <div className="col p-0">
                    <ProductSecondaryDetails
                      details={this.props.product.description}
                      specifications={this.props.product.specifications}
                    />
                  </div>
                </div>
                {/* <div>
                  <h3>Recommended For You</h3>
                  <div className="recommended-products-wrapper">
                    {this.props.relatedProducts.length !== 0 &&
                      this.props.relatedProducts.map((item) => (
                        <a key={item._id} href={`/product/${item._id}`}>
                          <div key={item._id} className="recommended-product">
                            <img src={item.imageUrl} alt={item.name} />
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
    cart: state.cartReducer.cart,
    relatedProducts: state.product.relatedProducts,
    productReviews: state.product.productReviews,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    fetchSingleProduct,
    fetchRelatedProducts,
  })(Product)
);
