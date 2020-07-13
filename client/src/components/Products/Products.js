import React, { useRef, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import Categories from "../Hero/HeroCategories";
import { connect } from "react-redux";
import Heart from "./Heart";
import {
  singleCategory,
  moreSingleCategoryProducts,
  hasMoreCategoryFalse,
} from "../../redux/actions";
import Rating from "../Product/Rating";
import { IconContext } from "react-icons";
import { FiFilter } from "react-icons/fi";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import "./Products.css";
import { reduxForm, Field } from "redux-form";
import BottomPageLoader from "../Pages/BottomPageLoader";
import ProductsInput from "./ProductsInput";

function Products(props) {
  const observer = useRef();
  const lastItemElementRef = useCallback((node) => {
    const fetchMoreData = () => {
      if (props.length < props.categoryProductCount) {
        return props.moreSingleCategoryProducts(
          props.match.params.category,
          props.filter
        );
      }
      props.hasMoreCategoryFalse();
    };
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreData();
      }
    });
    if (node) observer.current.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div className="container-fluid" id="products">
        <div className="row">
          <div className="col-lg-3">
            <Categories id="products-categories" />
          </div>
          <div className="col-lg-9" style={{ padding: "0px" }}>
            <div className="products-top">
              <div className="container products-lg-top">
                <ProductsInput />
              </div>
              <div className="container products-sm-top">
                <div className="row sort-sm-section-wrapper">
                  <div className="sort-sm-section" id="filter-section">
                    <IconContext.Provider value={{ className: "sort-sm-icon" }}>
                      <FiFilter />
                      <span>
                        <MdArrowDropDown />
                      </span>
                    </IconContext.Provider>
                    <div id="filter-stuff">
                      <div className="d-flex ml-3">
                        <p className="mr-1">Price:</p>
                        <div>
                          <input
                            style={{ width: "80px" }}
                            type="number"
                            placeholder="min"
                          />
                          -
                          <input
                            style={{ width: "80px" }}
                            type="number"
                            placeholder="max"
                          />
                        </div>
                      </div>

                      <div className="d-flex ml-4">
                        <input type="checkbox" className="mr-1" />
                        <Rating clickable={false} size={15} value={4} />
                        <span className="ml-2">&up</span>{" "}
                      </div>
                      <div className="d-flex ml-5">
                        <input type="checkbox" />
                        <p className="ml-1">Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="sort-sm-section" id="sort-section">
                    <IconContext.Provider value={{ className: "sort-sm-icon" }}>
                      <span>
                        <MdArrowDropDown />
                      </span>
                      <FaSortAmountDownAlt />
                    </IconContext.Provider>
                    <div id="sort-stuff">
                      <div className="d-flex ml-3">
                        <input type="checkbox" />
                        <p className="ml-1">Latest</p>
                      </div>
                      <div className="d-flex ml-3">
                        <input type="radio" />
                        <p className="ml-1">Lowest Price</p>
                      </div>
                      <div className="d-flex ml-3">
                        <input type="radio" />
                        <p className="ml-1">Highest Price</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-section">
              {props.singleCategoryProducts.length !== 0 &&
                props.singleCategoryProducts.map((product, index) => {
                  if (props.singleCategoryProducts.length === index + 1) {
                    return (
                      <div
                        key={product._id}
                        ref={lastItemElementRef}
                        className="product"
                      >
                        <Link
                          key={product._id}
                          to={`/product/${product._id}`}
                          title={product.name}
                          className="product-link"
                        >
                          <img src={product.imageUrl} alt={product.name} />
                          <div>
                            <p
                              className="product-name"
                              style={{ padding: "0px 10px" }}
                            >
                              {product.name}
                            </p>
                            <p
                              style={{
                                fontWeight: "bolder",
                                padding: "0px 10px",
                              }}
                              className="price"
                            >
                              Ksh.{product.price.toLocaleString()}{" "}
                            </p>
                          </div>
                        </Link>
                        <div style={{ height: "10px", padding: "0px 10px" }}>
                          {product.freeShipping && (
                            <p className="lead" style={{ fontSize: "smaller" }}>
                              Free Shipping
                            </p>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0px 10px",
                          }}
                          className="mb-2"
                        >
                          <Heart product={product} />
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={product._id} className="product">
                      <Link
                        key={product._id}
                        to={`/product/${product._id}`}
                        title={product.name}
                        className="product-link"
                      >
                        <img src={product.imageUrl} alt={product.name} />
                        <div>
                          <p
                            className="product-name"
                            style={{ padding: "0px 10px" }}
                          >
                            {product.name}
                          </p>
                          <p
                            style={{
                              fontWeight: "bolder",
                              padding: "0px 10px",
                            }}
                            className="price"
                          >
                            Ksh.{product.price.toLocaleString()}{" "}
                          </p>
                        </div>
                      </Link>
                      <div style={{ height: "10px", padding: "0px 10px" }}>
                        {product.freeShipping && (
                          <p className="lead" style={{ fontSize: "smaller" }}>
                            Free Shipping
                          </p>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0px 10px",
                        }}
                        className="mb-2"
                      >
                        <Heart product={product} />
                      </div>
                    </div>
                  );
                })}
            </div>
            {props.singleCategoryProducts.length !==
              props.categoryProductCount && <BottomPageLoader />}
          </div>
        </div>
      </div>
      <Footer />
      <MiniMenuWrapper />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    singleCategoryProducts: state.product.singleCategoryProducts,
    categoryProductCount: state.product.categoryProductCount,
    filter: state.filter,
  };
};
export default withRouter(
  reduxForm({ form: "Products" })(
    connect(mapStateToProps, {
      singleCategory,
      hasMoreCategoryFalse,
      moreSingleCategoryProducts,
    })(Products)
  )
);
