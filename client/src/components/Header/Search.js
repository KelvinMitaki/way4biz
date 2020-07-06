import React from "react";
import "./Search.css";
import { fetchProductsSearch } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(e) {
    this.setState({
      typing: e.target.value,
    });

    this.props.fetchProductsSearch(e.target.value);
  }
  render() {
    return (
      <div id={this.props.id} className="col">
        <div className="input-group">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control header-input-search"
            placeholder="bata shoes"
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
              this.props.searchedProducts.map((product) => (
                <div
                  onClick={() => this.setState({ typing: "" })}
                  key={product._id}
                >
                  <div className="searched-output-link-wrapper">
                    <Link
                      to={`/product/${product._id}`}
                      className="searched-product-link"
                    >
                      <div className="search-product-image mr-4">
                        <img src="/1.jpg" />
                      </div>
                      <p className="search-product-name">{product.name}</p>
                      <p className="search-product-price">ksh.4,000</p>
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
const mapStateToProps = (state) => {
  return {
    searchedProducts: state.product.searchedProducts,
  };
};
export default connect(mapStateToProps, { fetchProductsSearch })(Search);
