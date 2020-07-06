import React from "react";
import { Link } from "react-router-dom";

import "./Market.css";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Heart from "../Products/Heart";

class Market extends React.Component {
  state = {};
  render() {
    return (
      <div className="container-fluid market">
        <div className="col market-head">
          <h1>Selling</h1>
        </div>
        <div className="products-section">
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
                    <strong className="price">
                      Ksh.{product.price.toLocaleString()}
                    </strong>
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
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};
export default connect(mapStateToProps)(Market);
