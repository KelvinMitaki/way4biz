import React from "react";

import "./SellerDashBoardHeader.css";
import Logo from "../Header/Logo";
import ProfileImage from "../Header/ProfileImage";
import SellerHamburger from "./SellerHamburgerMenu";

class SellerDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background d-flex" id="seller-dashboard-header">
        <SellerHamburger />
        <Logo id="seller-logo" />
        <ProfileImage />
      </div>
    );
  }
}

export default SellerDashBoardHeader;
