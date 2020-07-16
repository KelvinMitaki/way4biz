import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Market.css";
import { connect } from "react-redux";
import Heart from "../Products/Heart";
import { fetchMoreProducts, hasMoreFalse } from "../../redux/actions";
import RandomCategories from "./RandomCategories";
import BottomPageLoader from "../Pages/BottomPageLoader";

function Market(props) {
  const observer = useRef();
  const lastItemElementRef = useCallback(
    node => {
      const fetchMoreData = () => {
        if (props.products.length < props.productCount) {
          return props.fetchMoreProducts();
        }
        props.hasMoreFalse();
      };
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [props]
  );

  return (
    <div className="container-fluid market">
      {/* <div className="col market-head"></div> */}
      <RandomCategories />
      <div className="products-section">
        {props.products.length !== 0 &&
          props.products.map((product, index) => {
            if (props.products.length === index + 1) {
              return (
                <div
                  className="product"
                  ref={lastItemElementRef}
                  key={product._id}
                >
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    title={product.name}
                    className="product-link"
                  >
                    <img
                      src={
                        product.imageUrl.includes("http")
                          ? product.imageUrl
                          : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl} `
                      }
                      alt={product.name}
                    />
                    <div style={{ padding: "0px 10px" }}>
                      <p className="product-name">{product.name}</p>
                      <p style={{ fontWeight: "bolder" }} className="price">
                        Ksh.{product.price.toLocaleString()}
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
                      padding: "0px 10px"
                    }}
                    className="my-2"
                  >
                    <Heart product={product} />
                  </div>
                </div>
              );
            }
            return (
              <div className="product" key={product._id}>
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  title={product.name}
                  className="product-link"
                >
                  <img
                    src={
                      product.imageUrl.includes("http")
                        ? product.imageUrl
                        : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl} `
                    }
                    alt={product.name}
                  />
                  <div style={{ padding: "0px 10px" }}>
                    <p className="product-name">{product.name}</p>
                    <p style={{ fontWeight: "bolder" }} className="price">
                      Ksh.{product.price.toLocaleString()}
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
                    padding: "0px 10px"
                  }}
                  className="my-2"
                >
                  <Heart product={product} />
                </div>
              </div>
            );
          })}
      </div>
      {props.hasMore && <BottomPageLoader />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    products: state.product.products,
    productCount: state.product.productCount,
    hasMore: state.product.hasMore
  };
};
export default connect(mapStateToProps, { fetchMoreProducts, hasMoreFalse })(
  Market
);
