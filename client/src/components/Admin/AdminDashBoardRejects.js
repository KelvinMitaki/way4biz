import React from "react";

import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashBoardSecondaryHeader from "./AdminDashboardSecondaryHeader";

import "./AdminDashBoardRejects.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
// import { BsArrowLeft } from "react-icons/bs";

class AdminDashBoardRejects extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <AdminDashBoardHeader />
        <AdminDashBoardSecondaryHeader />
        <div className="container box-container mt-4">
          <div>
            {/* <IconContext.Provider value={{ className: "arrow-icon ml-3 my-2" }}>
              <div>
                <Link to="/">
                  <BsArrowLeft />
                </Link>
              </div>
            </IconContext.Provider> */}
            <h3 style={{ textAlign: "center" }} className="mt-2 mb-3">
              Rejected Products
            </h3>
          </div>
          <div className="box-container admin-rejected-product">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img width="80%" style={{ margin: "auto" }} src="/1.jpg" />
              </div>
              <div className="col-md-9">
                <h5 className="my-1">
                  <strong>Name:</strong>Great Beer of Congo
                </h5>
                <h5 className="my-1">
                  <strong>Owner:</strong>
                  <Link to="/" title="visit store">
                    Dawida Wa Nzomo
                  </Link>
                </h5>
                <h6 className="why-reject">
                  The quick brown fox jumped over the lazy dog The quick brown
                  fox jumped over the lazy dog The quick brown fox jumped over
                  the lazy dog The quick brown fox jumped over the lazy dog The
                  quick brown fox jumped over the lazy dog The quick brown fox
                  jumped over the lazy dog The quick brown fox jumped over the
                  lazy dog The quick brown fox jumped over the lazy dog The
                  quick brown fox jumped over the lazy dog The quick brown fox
                  jumped over the lazy dog
                </h6>
                <span>
                  {/* <Link className="admin-rejected-product-view-more" to="/">
                    View More
                  </Link> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardRejects;
