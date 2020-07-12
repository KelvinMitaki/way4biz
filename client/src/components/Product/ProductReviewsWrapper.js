import React from "react";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./ProductReviewsWrapper.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import ProductReviews from "./ProductReviews";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Rating from "./Rating";
import { connect } from "react-redux";

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
            {/* <ProductReviews /> */}
            <div style={{ borderTop: "1px solid #d4d4d4" }}>
              {/* mapping here */}
              {this.props.productReviews.length !== 0 &&
                this.props.productReviews.map((prod) => (
                  <div className="buyer-review-wrapper" key={prod._id}>
                    <Rating size={15} clickable={false} value={prod.rating} />

                    <h5>
                      <strong>{prod.title}</strong>
                    </h5>
                    <p>{prod.body}</p>
                    <p className="my-2 lead" style={{ fontSize: "15px" }}>
                      By{" "}
                      {prod.userSeller
                        ? prod.userSeller.firstName
                        : prod.user.firstName}
                      <span className="ml-2">
                        on {new Date(prod.createdAt).toLocaleDateString()}{" "}
                      </span>
                    </p>
                  </div>
                ))}
              {this.props.productReviews.length === 0 && (
                <h3>No Reviews Yet</h3>
              )}
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productReviews: state.product.productReviews,
  };
};
export default connect(mapStateToProps)(ProductReviewsWrapper);
