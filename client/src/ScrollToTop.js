import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return <div></div>;
  }
}

export default withRouter(ScrollToTop);
