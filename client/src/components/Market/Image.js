import React, { Component } from "react";
import BottomPageLoader from "../Pages/BottomPageLoader";
import "react-lazy-load-image-component/src/effects/blur.css";
export class Image extends Component {
  text = React.createRef();
  componentDidUpdate() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          imageObserver.unobserve(image);
        }
      });
    });

    imageObserver.observe(this.text.current);
  }
  render() {
    return (
      <React.Fragment>
        {/* {!this.state.isLoaded &&
          <LazyLoadImage
            effect="blur"
            alt={this.props.alt}
            height={234}
            src={this.props.image}
            placeholder={<BottomPageLoader />}
            onLoad={() => this.setState({ isLoaded: true })}
          />
          
          
          }
          <img
            src={this.props.image}
            alt={this.props.alt}
            onLoad={() => this.setState({ isLoaded: true })}
          /> 
          */}

        <img
          data-src={this.props.image}
          ref={this.text}
          src="/1.jpg"
          alt={this.props.alt}
          height="200px"
          width="200px"
        />
      </React.Fragment>
    );
  }
}

export default Image;
