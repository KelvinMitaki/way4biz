import React from "react";

import "./HelpCenterHeader.css";
import Logo from "../../Header/Logo";

class HelpCenterHeader extends React.Component {
  render() {
    return (
      <div id="help-center-header" className="primary-background">
        <Logo />
      </div>
    );
  }
}

export default HelpCenterHeader;
