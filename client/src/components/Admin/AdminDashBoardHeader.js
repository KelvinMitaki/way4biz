import React from "react";

import "./AdminDashBoardHeader.css";
import Logo from "../Header/Logo";
import { IconContext } from "react-icons";
import { MdArrowDropDown } from "react-icons/md";
import AdminProfile from "./AdminProfile";

class AdminDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background">
        <div className="container p-0" id="admin-dashboard-header">
          <Logo id="admin-logo" />
          <div id="admin-profile-section">
            <div className="d-flex align-items-center">
              <AdminProfile id="admin-header-profile-image" />
              <IconContext.Provider
                value={{ className: "admin-header-dropdown-icon" }}
              >
                <MdArrowDropDown />
              </IconContext.Provider>
            </div>
            <div className="admin-logout-section">
              <p
                className="p-2"
                onClick={() => (window.location.href = "/api/logout")}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardHeader;
