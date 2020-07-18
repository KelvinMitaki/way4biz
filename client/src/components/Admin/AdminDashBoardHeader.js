import React from "react";

import "./AdminDashBoardHeader.css";
import Logo from "../Header/Logo";
import ProfileImage from "../Header/ProfileImage";
import AdminHamburger from "./AdminHamburgerMenu";

class AdminDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background d-flex" id="admin-dashboard-header">
        <AdminHamburger />
        <Logo id="admin-logo" />
        <ul className="admin-menu-items">
          <li>Sellers </li>
        </ul>
        <ProfileImage />
      </div>
    );
  }
}

export default AdminDashBoardHeader;
