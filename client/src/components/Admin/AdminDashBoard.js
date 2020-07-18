import React from "react";
import AdminDashBoardMenu from "./AdminDashBoardMenu";
import AdminDashBoardHeader from "./AdminDashBoardHeader";

class AdminDashBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <AdminDashBoardHeader />
        <div className="row no-gutters">
          {/* <div className="col-md-3">
            <AdminDashBoardMenu />
          </div> */}
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoard;
