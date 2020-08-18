import React from "react";
import { animateScroll as scroll } from "react-scroll";

import "./SellerOrientationGuide.css";

class SellerOrientationGuide extends React.Component {
  componentDidMount() {
    this.props.proceed(false);
    scroll.scrollToTop();
  }

  handleClick = (e) => {
    this.props.proceed(true);
  };
  render() {
    return (
      <div className="container">
        <h3
          className="mb-3"
          style={{ textDecoration: "underline", textAlign: "center" }}
        >
          Orientation Guide
        </h3>
        <div>
          <h5>Please read the seller orientation guide.</h5>
          <a
            className="my-2 btn btn-lg"
            href="/1.jpg"
            download
            id="download-guide-link"
            onClick={this.handleClick}
          >
            Download PDF Guide
          </a>
        </div>
      </div>
    );
  }
}

export default SellerOrientationGuide;
