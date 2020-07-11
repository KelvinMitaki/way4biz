import React from "react";

import "./Skeleton.css";

class Skeleton extends React.Component {
  render() {
    return (
      <div
        className={this.props.elemClass}
        id="skeleton-wrapper"
        text={this.props.isText}
      >
        <div className="skeleton">
          <div className="skeleton-indicator"></div>
        </div>
      </div>
    );
  }
}

export default Skeleton;
