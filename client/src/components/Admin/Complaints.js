import React from "react";

import "./AdminDashBoardComplaint.css";
import { Link } from "react-router-dom";
import "./Complaints.css";

class Complaints extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row y">
          <div className="col-md-4">
            <h6>Buyer Name</h6>
          </div>
          <div className="col-md-3">
            <h6>Seller Name</h6>
          </div>
          <div className="col-md-3">
            <h6>Product</h6>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* mapping here */}
        <div className="row box-container admin-complain-2">
          <div className="col-md-4">
            <p>
              <strong className="x mr-1">Buyer:</strong>
              <span>
                Tech Lead Tech Lead Tech Lead Tech Lead Tech Lead Tech Lead
              </span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong className="x mr-1">Seller:</strong>
              <span>Clement</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong className="x mr-1">Product:</strong>
              <span>Great Beer</span>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              <Link to="/admin/complaint" className="complaint-view-more">
                View More
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Complaints;
