import React, { Component } from "react";

export class Image extends Component {
  componentDidMount() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          this.element.src = this.props.image;
          this.observer = this.observer.disconnect();
        }
      });
    });
    this.observer.observe(this.element);
  }
  render() {
    return (
      <React.Fragment>
        <img
          src={this.props.image}
          ref={el => (this.element = el)}
          alt={this.props.alt}
        />
      </React.Fragment>
    );
  }
}

export default Image;
