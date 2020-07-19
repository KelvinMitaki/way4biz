import React from "react";

import "./AdminDashBoardHeader.css";
import Logo from "../Header/Logo";
import ProfileImage from "../Header/ProfileImage";
// import AdminHamburger from "./AdminHamburgerMenu";

class AdminDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background">
        {/* <AdminHamburger /> */}
        <div className="container p-0" id="admin-dashboard-header">
          <Logo id="admin-logo" />
          <ProfileImage />
        </div>
      </div>
    );
  }
}

export default AdminDashBoardHeader;
