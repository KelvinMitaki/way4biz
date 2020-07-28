import React from "react";

import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashBoardSecondaryHeader from "./AdminDashboardSecondaryHeader";

import "./AdminDashBoardRejects.css";

class AdminDashBoardRejects extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <AdminDashBoardHeader />
        <AdminDashBoardSecondaryHeader />
        <div className="container box-container mt-4">
          <h3 className="mt-3 mb-2" style={{ textAlign: "center" }}>
            Rejected Products
          </h3>
          <div className="box-container">
            <div className="row">
              <div className="col-lg-3">
                <img width="80%" style={{ margin: "auto" }} src="/1.jpg" />
              </div>
              <div className="col-lg-9">
                <h4>
                  <strong>Name:</strong>Great Beer of Congo
                </h4>
                <h4>
                  <strong>Owner:</strong>Dawida Wa Nzomo
                </h4>
                <h6>
                  The quick brown fox jumped over the lazy dog The quick brown
                  fox jumped over the lazy dog The quick brown fox jumped over
                  the lazy dog The quick brown fox jumped over the lazy dog The
                  quick brown fox jumped over the lazy dog The quick brown fox
                  jumped over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardRejects;
