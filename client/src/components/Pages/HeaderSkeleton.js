import React from "react";

// import "./BoxSkeleton.css";

class HeaderSkeleton extends React.Component {
  render() {
    return (
      <div className={this.props.elemClass} id="skeleton-wrapper">
        <div className="header-skeleton">
          <div className="header-skeleton-indicator"></div>
        </div>
      </div>
    );
  }
}

export default HeaderSkeleton;
