import React from "react";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./ProductReviewsWrapper.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductReviews from "./ProductReviews";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

class ProductReviewsWrapper extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div id="product-reviews-wrapper" className="box-container">
            <IconContext.Provider value={{ className: "arrow-icon ml-3 my-2" }}>
              <div className="d-flex align-items-center review-wrapper">
                <Link to="/" className="reviews-link">
                  <BsArrowLeft />
                  <span
                    style={{
                      //   fontWeight: "bold",
                      fontSize: "25px",
                      textDecoration: "none",
                      color: "#000",
                    }}
                    className="ml-2 "
                  >
                    Customer Reviews
                  </span>
                </Link>
              </div>
            </IconContext.Provider>
            <ProductReviews />
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default ProductReviewsWrapper;
