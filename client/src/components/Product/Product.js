import React from "react";
import ReactImageMagnify from "react-image-magnify";
import OwlCarousel from "react-owl-carousel";
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

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId);
  }
  componentDidUpdate() {
    if (this.props.relatedProducts.length === 0) {
      this.props.product &&
        this.props.fetchRelatedProducts(this.props.product.subcategory);
    }
  }
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
      let itemInCart = false;
      itemInCart = this.props.cart.find(
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
                    <Rating size={18} clickable={false} value={5} />
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
                    this.props.relatedProducts.map(item => (
                      <Link key={item._id} to={`/product/${item._id}`}>
                        <div key={item._id} className="related-product">
                          <img src={item.imageUrl} alt={item.name} />
                          <p>{item.name}</p>
                          <p>Ksh.{item.price.toLocaleString()} </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
              <div className="row product-features-reviews-specifications mt-3">
                <div className="col-lg-2 product-features-reviews-specifications-sidebar box-container">
                  <div className="product-seller-store">
                    <h5
                      className="my-2"
                      style={{ textDecoration: "underline" }}
                    >
                      Seller Store
                    </h5>
                    <IconContext.Provider
                      value={{ className: "product-seller-store-icon" }}
                    >
                      <FaStore />
                    </IconContext.Provider>
                    <div>
                      <p
                        style={{
                          color: "#000"
                        }}
                      >
                        {this.props.product.seller.storeName}
                      </p>
                      <Rating size={20} />
                      <small>
                        <Link
                          style={{
                            color: "#f76b1a"
                          }}
                          to="/"
                        >
                          Visit Store
                        </Link>
                      </small>
                    </div>
                    <h6
                      className="my-2"
                      style={{ fontSize: "15px", fontWeight: "bolder" }}
                    >
                      Seller Recommendations
                    </h6>
                    <div style={{ borderTop: "1px solid #d4d4d4" }}></div>
                    <div id="seller-recommendation-products">
                      <div className="seller-recommendation-product">
                        <img src="/1.jpg" alt="helloo" />
                        <p>Item Name</p>
                        <p>Ksh.20,000</p>
                      </div>
                      <div className="seller-recommendation-product">
                        <img src="/1.jpg" alt="helloo" />
                        <p>Item Name</p>
                        <p>Ksh.20,000</p>
                      </div>
                      <div className="seller-recommendation-product">
                        <img src="/1.jpg" alt="helloo" />
                        <p>Item Name</p>
                        <p>Ksh.20,000</p>
                      </div>
                    </div>
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
    product =
      state.product.products.find(
        product =>
          product._id.toString() ===
          [ownProps.match.params.productId].toString()
      ) || state.product.product;
  }
  return {
    product,
    wishlist: state.cartReducer.wishlist,
    cart: state.cartReducer.cart,
    relatedProducts: state.product.relatedProducts
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
