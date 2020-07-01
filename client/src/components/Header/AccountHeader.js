import React from "react";

import "./AccountHeader.css";
import Logo from "./Logo";
import Search from "./Search";
import Icons from "./Icons";
import UserName from "./UserName";
import ProfileImage from "./ProfileImage";
import SecondaryHeader from "./SecondaryHeader";
class AccountHeader extends React.Component {
  render() {
    return (
      <div id="header-wrapper">
        <div className="d-flex primary-background account-header">
          <Logo id="account-header-logo" />
          <UserName />
          <Search id="account-header-search" />
          <Icons id="account-header-icons" />
          <ProfileImage />
        </div>
        <SecondaryHeader />
      </div>
    );
  }
}

export default AccountHeader;
