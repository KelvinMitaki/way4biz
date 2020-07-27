import React from "react";

import "./SellerRejects.css";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { Link } from "react-router-dom";

class SellerRejects extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />

        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 py-3">
            <div className="container box-container">
              <h3 style={{ textAlign: "center" }} className="mt-3 mb-2">
                Rejected Products
              </h3>
              {/* fucking mapping here */}
              <div className="box-container reject-info p-2">
                <h3 className="my-2">Great Useless Beer</h3>
                <p>
                  The quick brown fox jumped over the lazy dog The quick brown
                  fox jumped over the lazy dogThe quick brown fox jumped over
                  the lazy dogThe quick brown fox jumped over the lazy dogThe
                  quick brown fox jumped over the lazy dog.
                </p>
                <div className="reject-links mt-2 pt-2">
                  <Link to="/" className="reject-link">
                    Edit Product
                  </Link>
                  <Link to="/" className="reject-link">
                    Delete Product
                  </Link>
                </div>
              </div>

              <div className="box-container reject-info p-2">
                <h3 className="my-2">Great Useless Beer</h3>
                <p>
                  The quick brown fox jumped over the lazy dog The quick brown
                  fox jumped over the lazy dogThe quick brown fox jumped over
                  the lazy dogThe quick brown fox jumped over the lazy dogThe
                  quick brown fox jumped over the lazy dog.
                </p>
                <div className="reject-links mt-2 pt-2">
                  <Link to="/" className="reject-link">
                    Edit Product
                  </Link>
                  <Link to="/" className="reject-link">
                    Delete Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerRejects;
