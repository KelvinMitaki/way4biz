import React from "react";
import "./Header.css";
import Logo from "./Logo";
import Search from "./Search";
import Icons from "./Icons";
import SecondaryHeader from "./SecondaryHeader";

class Header extends React.Component {
  render() {
    return (
      <div id="header-wrapper">
        <div className="header d-flex primary-background">
          <Logo id="logo" />
          <Search id="header-search" />
          <Icons id="header-icons" />
        </div>
        <SecondaryHeader />
      </div>
    );
  }
}

export default Header;
