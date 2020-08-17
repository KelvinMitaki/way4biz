import React from "react";
import { animateScroll as scroll } from "react-scroll";

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
          To proceed,please download a copy of the guide from the link.
          <a
            className="my-2"
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
