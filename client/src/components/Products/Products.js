import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

import Categories from "../Hero/HeroCategories";
import { connect } from "react-redux";
import Heart from "./Heart";
import { singleCategory } from "../../redux/actions";

class Products extends React.Component {
  componentDidMount() {
    this.props.singleCategory(
      this.props.match.params.category,
      this.props.history
    );
  }
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
                    <div key={product._id} className="product">
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
                        className="mb-2"
                      >
                        <Heart product={product} />
                        {product.freeShipping && (
                          <p className="lead" style={{ fontSize: "smaller" }}>
                            Free Shipping
                          </p>
                        )}
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
export default withRouter(
  connect(mapStateToProps, { singleCategory })(Products)
);
