import React from "react";
import ReactImageMagnify from "react-image-magnify";
import OwlCarousel from "react-owl-carousel";

import "./Product.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import AddToCartModalButton from "./AddToCartModalButton";
import Rating from "./Rating";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
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
      const { product } = this.props;
      return (
        <React.Fragment>
          <Header />
          {this.props.product && (
            <div id="container-fluid">
              {this.state.modalShow ? (
                <div onClick={this.handleClick} className="back-shed"></div>
              ) : null}
              <div className="row" id="product">
                <div className="col-lg-6 product-imgs">
                  <ReactImageMagnify {...this.getImageProps()} />
                  <div className="feature-imgs d-flex mb-4">
                    <OwlCarousel
                      items={5}
                      loop={true}
                      autoplay={true}
                      autoplayTimeout={4000}
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
                <div className="col-lg-6 product-info">
                  <div className="product-name-wishlist">
                    <h3 id="prod-name">{this.props.product.name}</h3>
                    <p className="flaticon-heart secondary-text"></p>
                  </div>
                  <div className="price-rating d-flex">
                    <h4>Ksh.{this.props.product.price.toLocaleString()}</h4>
                    <Rating />
                  </div>
                  <div id="prod-description">
                    <h3>Product Details</h3>
                    <p>{this.props.product.description}</p>
                  </div>
                  <div>
                    <button
                      className="btn btn-md my-3 add-to-cart btn-block"
                      onChange={this.handleClick}
                      onClick={() => this.props.addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <AddToCartModalButton
                      className="modal"
                      show={this.state.modalShow}
                      close={this.handleCloseModal}
                    ></AddToCartModalButton>
                  </div>
                  <div id="features">
                    <h5>Features and Specifications</h5>
                    <p>{this.props.product.specifications}</p>
                    {/* <ul>
                    <li>32 inches</li>
                    <li>IPS Technology</li>
                    <li>Touch Screen</li>
                  </ul> */}
                  </div>
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
    product
  };
};
export default connect(mapStateToProps, { addToCart })(Product);
