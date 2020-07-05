import React from "react";
import { Link } from "react-router-dom";

import "./Market.css";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";

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
            this.props.products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product"
                title={product.name}
              >
                <img src={product.imageUrl} alt={product.name} />
                <div>
                  <p className="product-name">{product.name}</p>
                  <strong className="price">
                    Ksh.{product.price.toLocaleString()}
                  </strong>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="my-2"
                >
                  {/* <IconContext.Provider
                    value={{ size: "1.5em", color: "#f76b1a" }}
                  >
                    {this.state.clicked ? (
                      <div
                        style={{ cursor: "pointer" }}
                      >
                        <AiOutlineStar />
                      </div>
                    ) : (
                      <div
                        style={{ cursor: "pointer" }}
                      >
                        <AiOutlineStar />
                      </div>
                    )}
                  </IconContext.Provider> */}
                  <IconContext.Provider
                    value={{ size: "1.5em", color: "#f76b1a" }}
                  >
                    {this.state.clicked ? (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => this.setState({ clicked: false })}
                      >
                        <IoMdHeart />
                      </div>
                    ) : (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => this.setState({ clicked: true })}
                      >
                        <IoMdHeartEmpty />
                      </div>
                    )}
                  </IconContext.Provider>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default connect(mapStateToProps)(Market);
