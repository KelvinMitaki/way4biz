import React from "react";

import "./HeroCategories.css";

class HeroCategories extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="category-head">
          <h3>Categories</h3>
        </div>
        <ul className="category">
          <li>All Categories</li>
          <li>Women's Clothing</li>
          <li>Men's Clothing</li>
          <li>Baby's Clothing</li>
          <li>Electronics</li>
          <li>Sports and Outdoors</li>
          <li>Beauty Health,Hair</li>
          <li>Bags and Shoes</li>
          <li>Automobiles</li>
          <li>Jewelery and watches</li>
        </ul>
      </div>
    );
  }
}

export default HeroCategories;
