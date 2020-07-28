import React from "react";

import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashBoardSecondaryHeader from "./AdminDashboardSecondaryHeader";

import "./AdminDashBoardComplaints.css";

class AdminDashBoardComplaints extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <AdminDashBoardHeader />
        <AdminDashBoardSecondaryHeader />
        <div className="container box-container mt-4">
          <h3 className="mt-3 mb-2" style={{ textAlign: "center" }}>
            Complaints
          </h3>
          {/* mapping here */}
          <div className="box-container p-2 admin-complain">
            {/* <h4>
              <strong className="mr-1">Buyer:</strong>Helloo World
            </h4>
            <p>
              For fucks sake,I received an empty box. Help me recover my
              money...
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardComplaints;
