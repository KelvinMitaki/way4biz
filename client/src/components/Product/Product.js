import React from "react";
import ReactImageMagnify from "react-image-magnify";

import "./Product.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Header from "../Header/Header";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        modalShow: !prevState.modalShow,
      };
    });
  }

  // handleModalClose
  getImageProps() {
    return {
      smallImage: {
        alt: "Helloooo",
        isFluidWidth: true,
        src: "product-imgs/1.jpg",
      },
      largeImage: {
        src: "product-imgs/1.jpg",
        width: 1200,
        height: 1800,
      },
      enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="container-fluid">
          <div className="row" id="product">
            <div className="col-lg-6 product-imgs">
              <ReactImageMagnify {...this.getImageProps()} />
              <div className="feature-imgs d-flex">
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
                <div>
                  <img src="product-imgs/1.jpg" alt="product-image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-info">
              <div className="product-name-wishlist">
                <h3 id="prod-name">Dell Monitor "32</h3>
                <p className="flaticon-heart secondary-text"></p>
              </div>
              <div className="price-rating d-flex">
                <h4>Ksh.140,000</h4>
                <p>Stars</p>
              </div>
              <div id="prod-description">
                <h3>Product Details</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Why do we use it? It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div>
                <button className="btn btn-md my-2 add-to-cart btn-block">
                  Add to Cart
                </button>
              </div>
              <div id="features">
                <h4>Features and Specifications</h4>
                <ul>
                  <li>32 inches</li>
                  <li>IPS Technology</li>
                  <li>Touch Screen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}

export default Product;
