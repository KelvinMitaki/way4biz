import React, { Component } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import BottomPageLoader from "../Pages/BottomPageLoader";
import "react-lazy-load-image-component/src/effects/blur.css";
export class Image extends Component {
  render() {
    return (
      <React.Fragment>
        <LazyLoadImage
          effect="blur"
          alt={this.props.alt}
          height={234}
          src={this.props.image}
          placeholder={<BottomPageLoader />}
        />
      </React.Fragment>
    );
  }
}

export default Image;
