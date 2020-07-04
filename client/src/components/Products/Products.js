import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";

import Categories from "../Hero/HeroCategories";

class Products extends React.Component {
  render() {
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
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
                <Link to="/" className="product" title="{product.name}">
                  <img src="/1.jpg" alt="{product.name}" />
                  <div>
                    <h3 className="product-name">Test</h3>
                    <p className="price">Ksh.20,000</p>
                  </div>
                </Link>
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

export default Products;
