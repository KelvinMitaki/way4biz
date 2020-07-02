import React from "react";
import "./Search.css";
import { fetchProductsSearch } from "../../redux/actions";
import { connect } from "react-redux";

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
        <div className="input-group">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control header-input-search"
            placeholder="bata shoes"
          />
          <div className="input-group-append">
            <button id="header-search-btn">
              <i className="fa fa-search " style={{ fontSize: "25px" }}></i>
              <span>Search</span>
            </button>
          </div>
        </div>
        {this.state.typing !== "" ? (
          <div className="search-output tertiary-background">
            {this.props.searchedProducts.length > 0 &&
              this.props.searchedProducts.map(product => (
                <div className="my-2" key={product._id}>
                  <strong>{product.name}</strong>
                  <br />
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
export default connect(mapStateToProps, { fetchProductsSearch })(Search);
