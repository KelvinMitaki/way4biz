import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Categories from "../Hero/HeroCategories";
// import Heart from "../Products/Heart";
import "./Store.css";
import Image from "../Market/Image";
import HeroCategories from "../Hero/HeroCategories";
import { fetchStoreProducts } from "../../redux/actions";
import { connect } from "react-redux";

class Store extends Component {
  componentDidMount() {
    this.props.fetchStoreProducts(this.props.match.params.sellerId);
  }
  render() {
    return (
      <div>
        {/* if buyer or seller display this header if admin display admin header */}
        <Header />
        <div className="container-fluid" id="products">
          <div className="row">
            <div className="col-lg-3">
              {/* <Categories id="products-categories" /> */}
              <HeroCategories />
            </div>
            <div className="col-lg-9" style={{ padding: "0px" }}>
              <div className="store-header py-2">
                <h2 style={{ textAlign: "center" }}>Bata Stores</h2>
              </div>
              <div className="products-section">
                <div className="product">
                  <Link to="/" title="Helloo World" className="product-link">
                    <Image image="/1.jpg" alt="test-img" />
                    <div>
                      <p
                        className="product-name"
                        style={{ padding: "0px 10px" }}
                      >
                        Great Beer
                      </p>
                      <p
                        style={{
                          fontWeight: "bolder",
                          padding: "0px 10px"
                        }}
                        className="price"
                      >
                        Ksh.1500
                      </p>
                    </div>
                  </Link>
                  <div style={{ height: "10px", padding: "0px 10px" }}>
                    <p className="lead" style={{ fontSize: "smaller" }}>
                      Free Shipping
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px"
                    }}
                    className="mb-2"
                  >
                    {/* <Heart /> */}
                  </div>
                </div>
                <div className="product">
                  <Link to="/" title="Helloo World" className="product-link">
                    <Image image="/1.jpg" alt="test-img" />
                    <div>
                      <p
                        className="product-name"
                        style={{ padding: "0px 10px" }}
                      >
                        Great Beer
                      </p>
                      <p
                        style={{
                          fontWeight: "bolder",
                          padding: "0px 10px"
                        }}
                        className="price"
                      >
                        Ksh.1500
                      </p>
                    </div>
                  </Link>
                  <div style={{ height: "10px", padding: "0px 10px" }}>
                    <p className="lead" style={{ fontSize: "smaller" }}>
                      Free Shipping
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px"
                    }}
                    className="mb-2"
                  >
                    {/* <Heart /> */}
                  </div>
                </div>
                <div className="product">
                  <Link to="/" title="Helloo World" className="product-link">
                    <Image image="/1.jpg" alt="test-img" />
                    <div>
                      <p
                        className="product-name"
                        style={{ padding: "0px 10px" }}
                      >
                        Great Beer
                      </p>
                      <p
                        style={{
                          fontWeight: "bolder",
                          padding: "0px 10px"
                        }}
                        className="price"
                      >
                        Ksh.1500
                      </p>
                    </div>
                  </Link>
                  <div style={{ height: "10px", padding: "0px 10px" }}>
                    <p className="lead" style={{ fontSize: "smaller" }}>
                      Free Shipping
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 10px"
                    }}
                    className="mb-2"
                  >
                    {/* <Heart /> */}
                  </div>
                </div>
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
    storeProducts: state.product.storeProducts
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchStoreProducts })(Store)
);
