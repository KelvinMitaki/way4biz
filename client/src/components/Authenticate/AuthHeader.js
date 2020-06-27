import React from "react";
import { Link } from "react-router-dom";
import "./AuthHeader.css";

class AuthHeader extends React.Component {
  render() {
    return (
      <div id="auth-header" className="primary-background">
        <Link to="/" className="link secondary-link">
          <h1>LOGO</h1>
        </Link>
      </div>
    );
  }
}

export default AuthHeader;
