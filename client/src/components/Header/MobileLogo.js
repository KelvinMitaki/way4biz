import React from "react";
import { Link } from "react-router-dom";

import "./MobileLogo.css";

class MobileLogo extends React.Component {
  render() {
    return (
      <div id="mobile-logo" className="primary-background">
        <Link to="/" className="link secondary-link">
          <h1>LOGO</h1>
        </Link>
      </div>
    );
  }
}

export default MobileLogo;
