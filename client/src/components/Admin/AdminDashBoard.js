import React from "react";
// import AdminDashBoardMenu from "./AdminDashBoardMenu";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";

class AdminDashBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <AdminDashBoardHeader />
        <div className="row no-gutters" style={{ height: "2000px" }}>
          <AdminDashboardSecondaryHeader />
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
