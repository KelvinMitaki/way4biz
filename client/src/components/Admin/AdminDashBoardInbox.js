import React from "react";

import "./AdminDashBoardInbox.css";
import MobileLogo from "../Header/MobileLogo";
import AdminDashBoardHeader from "./AdminDashBoardHeader";

class AdminDashBoardInbox extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <MobileLogo />
        <AdminDashBoardHeader />
        <div className="container box-container">
          <h3>Inbox</h3>
          <div className="box-container">
            <h6>Sender:</h6>
            <h6>Subject</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardInbox;
