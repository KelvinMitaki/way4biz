import React from "react";

import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashBoardSecondaryHeader from "./AdminDashboardSecondaryHeader";

import "./AdminDashBoardComplaint.css";
import { Link, withRouter } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { connect } from "react-redux";

class AdminDashBoardComplaints extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <AdminDashBoardHeader />
        <AdminDashBoardSecondaryHeader />
        <div className="container box-container mt-4">
          {/* <h3 className="mt-3 mb-2" style={{ textAlign: "center" }}>
            Complaints
          </h3> */}
          <IconContext.Provider value={{ className: "arrow-icon ml-3 my-2" }}>
            <div className="d-flex align-items-center">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => this.props.history.goBack()}
              >
                <BsArrowLeft />
              </div>
              <h3 className="ml-3">Complaints</h3>
            </div>
          </IconContext.Provider>
          <div className="box-container p-2 admin-complain">
            <div className="container">
              <h4 className="my-1">Buyer</h4>
              <div className="row box-container p-2 m-0">
                <div className="col-md-6 p-0">
                  <h6>
                    <strong className="mr-1">Name:</strong>Tech Lead{" "}
                  </h6>
                </div>
                <div className="col-md-6 p-0">
                  <h6>
                    <strong className="mr-1">Phone:</strong>545454
                  </h6>
                </div>
              </div>
              <div>
                <h4 className="mt-3 mb-1">Complain</h4>
                <div className="box-container p-2">
                  <p style={{ fontSize: "17px" }}>
                    I cannot tolerate humiliation as THE TECH LEAD. Algoexpert
                    subscriptions arent genuine
                  </p>
                </div>
              </div>
              <h4 className="my-1">Seller</h4>
              <div className="box-container p-2">
                <h6 className="my-1">
                  <strong className="mr-2">Name:</strong>Clement
                </h6>
                <h6 className="my-1">
                  <strong className="mr-2">Phone:</strong>4343434
                </h6>
                <h6 className="my-1">
                  <strong className="mr-2">Email:</strong>clem@algoexpert.io
                </h6>
                <h6>
                  <Link to="/" style={{ color: "#f76b1a" }}>
                    View Store
                  </Link>
                </h6>
              </div>
              <div>
                <h4 className="my-1">Product Details</h4>
                <div className="box-container">
                  <div className="row m-0 ">
                    <div className="col-md-6">
                      <h6 className="my-1">
                        <strong className="mr-2">Name:</strong>Great Beer
                      </h6>
                      <h6 className="my-1">
                        <strong className="mr-2">Unit Price:</strong>ksh.3,000
                      </h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="my-1">
                        <strong className="mr-2">Quantity Ordered:</strong>1
                      </h6>
                      <h6 className="my-1">
                        <strong className="mr-2">Total Price:</strong>ksh.3,000
                      </h6>
                    </div>
                  </div>
                  {/* <h4 className="my-1 ml-2">Images</h4> */}
                  <div className="complain-product-images mt-3">
                    <div>
                      <img src="/1.jpg" />
                    </div>
                    <div>
                      <img src="/1.jpg" />
                    </div>
                    <div>
                      <img src="/1.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mapping ends here */}
          {/* if no complains */}
          <div className="admin-no-complains">
            <h4>No complaints yet.</h4>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default withRouter(connect(mapStateToProps)(AdminDashBoardComplaints));
