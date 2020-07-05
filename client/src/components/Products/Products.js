import React from "react";
import { Link, Redirect } from "react-router-dom";

import "./Products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

import Categories from "../Hero/HeroCategories";
import { connect } from "react-redux";

class Products extends React.Component {
  render() {
    console.log(this.props.singleCategoryProducts);
    if (this.props.singleCategoryProducts.length === 0) {
      return <Redirect to="/" />;
    }
    return (
      <div id="products">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Categories id="products-categories" />
            </div>
            <div className="col-lg-9 box-container " style={{ padding: "0px" }}>
              <div className="py-5 products-section">
                {this.props.singleCategoryProducts.length !== 0 &&
                  this.props.singleCategoryProducts.map(product => (
                    <Link
                      key={product._id}
                      to={`/product/${product._id}`}
                      className="product"
                      title={product.name}
                    >
                      <img src={product.imageUrl} alt={product.name} />
                      <div>
                        <p className="product-name">{product.name}</p>
                        <p className="price">
                          Ksh.{product.price.toLocaleString()}{" "}
                        </p>
                      </div>
                    </Link>
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
