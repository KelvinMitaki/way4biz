import React from "react";
import "./AccountLogistics.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BsExclamationCircle } from "react-icons/bs";
import MobileLogo from "../Header/MobileLogo";

class AccountLogistics extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <AccountHeader />
          <div className="container pending-reviews-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <AccountMenu />
              </div>
              <div className="col-lg-8  box-container">
                {/* deliveries */}
                <React.Fragment>
                  {" "}
                  <div className="container mb-3">
                    <h3 className="mt-2" style={{ textAlign: "center" }}>
                      Logistics Services
                    </h3>
                  </div>
                  <div className="container y">
                    <div className="row">
                      <div className="col-md-5">
                        <h6>Delivered From</h6>
                      </div>
                      <div className="col-md-4">
                        <h6>Delivered To</h6>
                      </div>
                      <div className="col-md-3"></div>
                    </div>
                  </div>
                  <div className="container">
                    {/* mapping here */}

                    <div className="row box-container account-complaint-wrapper">
                      <div className="col-md-5">
                        <p>
                          <strong className="mr-2 x">Delivered From: </strong>
                          <span>Zimmerman</span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p>
                          <strong className="mr-2 x">Delivered To:</strong>
                          <span>Nairobi CBD</span>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          <Link
                            to={`/delivery/`}
                            className="account-complaint-view-more"
                          >
                            View More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                {/* No deliveries */}
                {/* <div className="no-buyer-complaints">
                  <BsExclamationCircle
                    style={{ fontSize: "100px", color: "#f76b1a" }}
                  />
                  <h5 className="mt-3">No complaints filed yet.</h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(AccountLogistics);
