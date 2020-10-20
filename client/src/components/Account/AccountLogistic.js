import React from "react";
import "./AccountLogistic.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import MobileLogo from "../Header/MobileLogo";

class AccountLogistic extends React.Component {
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
                <div className="d-flex align-items-center">
                  <div style={{ flex: "1" }}>
                    <IconContext.Provider
                      value={{ className: "arrow-icon ml-3 my-2" }}
                    >
                      <div
                        onClick={() => this.props.history.goBack()}
                        className="d-flex align-items-center"
                      >
                        <div style={{ cursor: "pointer" }}>
                          <BsArrowLeft />
                        </div>
                      </div>
                    </IconContext.Provider>
                  </div>

                  <h3 className="ml-1" style={{ flex: "2" }}>
                    Delivery Details
                  </h3>
                </div>

                <div className="box-container p-2 account-logistic">
                  <div className="container">
                    <p>
                      <b>Item Delivered: </b>Pizza
                    </p>
                    <p>
                      <b>Item Quantity: </b>2
                    </p>
                    <p>
                      <b>From: </b>TRM
                    </p>
                    <p>
                      <b>To: </b>Revlon Plaza
                    </p>
                    <p>
                      <b>Delivery Date: </b>1/1/2000
                    </p>
                    <p>
                      <b>Status: </b>Delivered
                    </p>
                  </div>
                </div>
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
export default withRouter(connect(mapStateToProps)(AccountLogistic));
