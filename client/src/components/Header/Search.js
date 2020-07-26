import React from "react";
import "./Search.css";
import { fetchProductsSearch, fetchProductReviews } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import reactSringReplace from "react-string-replace";
import Image from "../Market/Image";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(e) {
    this.setState({
      typing: e.target.value
    });

    this.props.fetchProductsSearch(e.target.value);
  }
  render() {
    return (
      <div id={this.props.id} className="col">
        {this.state.typing !== "" ? (
          <div
            onClick={() => this.setState({ typing: "" })}
            className="light-shed"
          ></div>
        ) : null}
        <div className="input-group">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control header-input-search"
            placeholder="Apple iPhone"
            value={this.state.typing}
          />
          <div className="input-group-append">
            <button id="header-search-btn">
              <IconContext.Provider value={{ className: "icon mr-1 " }}>
                <div className="icon-container">
                  <AiOutlineSearch />
                  <span>Search</span>
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
        {this.state.typing !== "" ? (
          <div className="search-output tertiary-background">
            {this.props.searchedProducts.length > 0 &&
              this.props.searchedProducts.map(product => (
                <div
                  onClick={() => this.setState({ typing: "" })}
                  key={product._id}
                >
                  <div className="searched-output-link-wrapper">
                    <Link
                      to={`/product/${product._id}`}
                      className="searched-product-link"
                      onClick={() =>
                        this.props.fetchProductReviews(product._id)
                      }
                    >
                      <div className="search-product-image mr-4">
                        <Image
                          height="80px"
                          width="80px"
                          image={
                            product.imageUrl[0].includes("http")
                              ? product.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${product.imageUrl[0]} `
                          }
                          alt={product.name}
                        />
                      </div>
                      <p className="search-product-name">
                        {reactSringReplace(
                          product.name,
                          this.state.typing,
                          (match, i) => {
                            return (
                              <span
                                key={i}
                                style={{
                                  fontWeight: "bold",
                                  textDecoration: "underline"
                                }}
                              >
                                {match}
                              </span>
                            );
                          }
                        )}
                      </p>
                      <p className="search-product-price">
                        <strong>ksh.{product.price.toLocaleString()}</strong>
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchedProducts: state.product.searchedProducts
  };
};
export default connect(mapStateToProps, {
  fetchProductsSearch,
  fetchProductReviews
})(Search);
