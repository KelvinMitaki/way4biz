import React from "react";

import "./AdminDashBoardCategories.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoardCategories extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container">
          <div className="box-container"></div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardCategories;
