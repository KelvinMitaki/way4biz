import React from "react";

import "./SearchResults.css";
import Header from "./Header";
import SecondaryHeader from "./SecondaryHeader";
import Rating from "../Product/Rating";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Header />
        <div className="container mt-4">
          <div className="main-single-search-product">
            <div className="main-search-product-image">
              <img src="/1.jpg" />
            </div>
            <div className="main-search-product-info">
              <h5>Great Beer Great Beer Great Beer Great Beer Great Beer</h5>
              <p>Ksh.10,000</p>
              <Rating size={20} />
              <p>Visit Store</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
