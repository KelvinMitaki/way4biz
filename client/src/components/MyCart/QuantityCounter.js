import React from "react";
import { connect } from "react-redux";
import "./QuantityCounter.css";
import { removeFromCart, addToCart } from "../../redux/actions";

class QuantityCounter extends React.Component {
  render() {
    return (
      <div id="quantity-counter">
        <button
          className="mr-3"
          onClick={() => this.props.removeFromCart(this.props.item)}
        >
          -
        </button>
        <p>{this.props.quantity}</p>
        <button
          className="ml-3"
          onClick={() => this.props.addToCart(this.props.item)}
        >
          +
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { removeFromCart, addToCart })(
  QuantityCounter
);
