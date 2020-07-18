import React from "react";

import "./AdminDashBoardHeader.css";
import Logo from "../Header/Logo";
import ProfileImage from "../Header/ProfileImage";
// import AdminHamburger from "./AdminHamburgerMenu";

class AdminDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background" id="admin-dashboard-header">
        {/* <AdminHamburger /> */}
        <Logo id="admin-logo" />
        <ProfileImage />
      </div>
    );
  }
}

export default AdminDashBoardHeader;
