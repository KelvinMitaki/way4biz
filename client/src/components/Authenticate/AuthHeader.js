import React from "react";
import "./AuthHeader.css";

class AuthHeader extends React.Component {
  render() {
    return (
      <div id="auth-header" className="primary-background">
        <a href="/" className="link secondary-link">
          <h1>LOGO</h1>
        </a>
      </div>
    );
  }
}

export default AuthHeader;
