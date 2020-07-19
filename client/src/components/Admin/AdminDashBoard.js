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
          <div className="container">
            <div className="row">
              <div className="col-lg-3">Helloo</div>
              <div className="col-lg-3">Helloo</div>
              <div className="col-lg-3">Helloo</div>
              <div className="col-lg-3">Helloo</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
