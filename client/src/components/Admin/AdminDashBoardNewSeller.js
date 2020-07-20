import React from "react";

import "./AdminDashBoardNewSeller.css";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

class AdminDashBoardSeller extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <DashBoardHeader />
        <SecondaryHeader />
        <div className="mt-4 container">
          <div className="box-container">
            <IconContext.Provider value={{ className: "arrow-icon ml-3 my-2" }}>
              <div className="d-flex align-items-center">
                <Link to="/admin-new-sellers">
                  <BsArrowLeft />
                </Link>
                {/* <h3 className="ml-3">Seller ID</h3> */}
              </div>
            </IconContext.Provider>
            <div className="admin-individual-seller-details">
              <h6>
                <strong>Name: </strong>John Doe
              </h6>
              <h6>
                <strong>StoreName:</strong>Limuru Bata
              </h6>
              <h6>
                <strong>Date Joined:</strong>1/1/2000
              </h6>
            </div>
            <div className="accept-sell-request">
              <button className="btn btn-block accept-sell-request-btn">
                Accept Seller Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardSeller;
