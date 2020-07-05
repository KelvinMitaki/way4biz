import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import "./Products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

import Categories from "../Hero/HeroCategories";
import { connect } from "react-redux";
import Heart from "./Heart";

class Products extends React.Component {
  state = {};
  render() {
    return (
      <div id="products">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Categories id="products-categories" />
            </div>
            <div className="col-lg-9" style={{ padding: "0px" }}>
              <div className="products-section">
                {this.props.singleCategoryProducts.length !== 0 &&
                  this.props.singleCategoryProducts.map(product => (
                    <div className="product">
                      <Link
                        key={product._id}
                        to={`/product/${product._id}`}
                        title={product.name}
                        className="product-link"
                      >
                        <img src={product.imageUrl} alt={product.name} />
                        <div>
                          <p className="product-name">{product.name}</p>
                          <p className="price">
                            Ksh.{product.price.toLocaleString()}{" "}
                          </p>
                        </div>
                      </Link>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0px 10px"
                        }}
                        className="my-2"
                      >
                        <Heart />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    singleCategoryProducts: state.product.singleCategoryProducts
  };
};
export default connect(mapStateToProps)(Products);
