import React from "react";

import "./CaroDisplay.css";
import Carousel from "./Carousel";
import { connect } from "react-redux";

class CaroDisplay extends React.Component {
  render() {
    return (
      <div id="caro-display" className="col col-lg-9">
        {this.props.products.length !== 0 && <Carousel />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default connect(mapStateToProps)(CaroDisplay);
