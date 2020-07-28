import React from "react";
import "./FileComplain.css";
import { withRouter } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { redirectOnFail } from "../../redux/actions";
import { connect } from "react-redux";

class FileComplain extends React.Component {
  componentDidMount() {
    this.props.redirectOnFail(
      this.props.match.params.productId,
      this.props.match.params.orderId,
      this.props.history
    );
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <AccountHeader />
          <div className="container pending-reviews-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <AccountMenu />
              </div>
              <div className="col-lg-8  box-container">
                <div className="container">
                  <IconContext.Provider
                    value={{ className: "arrow-icon ml-3 my-2" }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => this.props.history.goBack()}
                      >
                        <BsArrowLeft />
                      </div>
                      <h3 className="ml-3">File Complaint</h3>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="container">
                  <form className="form-group complain-form">
                    <div style={{ textAlign: "center" }}>
                      <label htmlFor="complain-input-field">
                        <strong>What is wrong?</strong>
                      </label>
                    </div>
                    <textarea
                      rows="5"
                      id="complain-input-field"
                      className="form-control"
                    ></textarea>
                    <button className="btn submit-complain mt-3">
                      Submit Complaint
                    </button>
                  </form>
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

export default withRouter(connect(null, { redirectOnFail })(FileComplain));
