import React from "react";

import "./BoxSkeleton.css";

class BoxSkeleton extends React.Component {
  render() {
    return (
      <div className={this.props.elemClass} id="skeleton-wrapper">
        <div className="skeleton">
          <div className="skeleton-indicator"></div>
        </div>
      </div>
    );
  }
}

export default BoxSkeleton;
