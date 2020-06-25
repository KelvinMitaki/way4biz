import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div id="logo">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
    );
  }
}

export default Logo;
