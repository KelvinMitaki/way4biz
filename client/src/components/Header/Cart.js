import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    return (
      <Link to="/cart" className="secondary-link">
        <div className="icon cart-icon flaticon-shopping-cart">
          <span className="badge">
            {this.props.cart
              .map(item => item.quantity)
              .reduce((cur, acc) => cur + acc, 0)}
          </span>
        </div>
      </Link>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};
export default connect(mapStateToProps)(Cart);
