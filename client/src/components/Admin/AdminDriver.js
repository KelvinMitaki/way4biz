import React from "react";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link, withRouter } from "react-router-dom";
import "./AdminDriver.css";
import { connect } from "react-redux";
import MobileLogo from "../Header/MobileLogo";

class AdminDriver extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 mb-5">
        <MobileLogo />
        <DashBoardHeader />
        <SecondaryHeader />
        <div className="mt-4 container">
          <div className="box-container">
            <div className="d-flex align-items-center">
              <div style={{ flex: "1" }}>
                <IconContext.Provider
                  value={{ className: "arrow-icon ml-3 my-2" }}
                >
                  <div className="d-flex align-items-center">
                    <Link to="/admin/drivers">
                      <BsArrowLeft />
                    </Link>
                  </div>
                </IconContext.Provider>
              </div>

              <h3 className="ml-1" style={{ flex: "2" }}>
                Driver Details
              </h3>
            </div>
            <div className="row p-3">
              <div className="col-md-6">
                <h6 className="my-1">Name: Mike Mikey</h6>
                <h6 className="my-1">Id No. 12345678</h6>
                <h6 className="my-1">Phone: 0799999999</h6>
              </div>
              <div className="col-md-6">
                <h6 className="my-1">Email: pikipiki@gmail.com</h6>
                <h6 className="my-1">Vehicle No. KMCD 411M</h6>
                <h6 className="my-1">Status: Free</h6>
              </div>
            </div>
            <h4 className="pl-3 mt-2 mb-1">Deliveries Made</h4>
            <div style={{ borderTop: "1px solid #d4d4d4" }}></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default withRouter(connect(mapStateToProps)(AdminDriver));
