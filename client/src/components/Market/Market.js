import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Market.css";
import { connect } from "react-redux";
import Heart from "../Products/Heart";
import { fetchMoreProducts, hasMoreFalse } from "../../redux/actions";

class Market extends React.Component {
  fetchMoreData = () => {
    if (this.props.products.length < this.props.productCount) {
      return this.props.fetchMoreProducts();
    }
    this.props.hasMoreFalse();
  };
  render() {
    return (
      <div className="container-fluid market">
        <div className="col market-head">
          <h1>Selling</h1>
        </div>
        <InfiniteScroll
          className="products-section"
          dataLength={this.props.products.length}
          next={this.fetchMoreData}
          hasMore={this.props.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You've seen it all</b>
            </p>
          }
        >
          {this.props.products.length !== 0 &&
            this.props.products.map(product => (
              <div className="product" key={product._id}>
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  title={product.name}
                  className="product-link"
                >
                  <img src={product.imageUrl} alt={product.name} />
                  <div style={{ padding: "0px 10px" }}>
                    <p className="product-name">{product.name}</p>
                    <p style={{ fontWeight: "bolder" }} className="price">
                      Ksh.{product.price.toLocaleString()}
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
                  <Heart product={product} />
                  {product.freeShipping && (
                    <p className="lead" style={{ fontSize: "smaller" }}>
                      Free Shipping
                    </p>
                  )}
                </div>
              </div>
            ))}
        </InfiniteScroll>
      </div>
    );
  }
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
