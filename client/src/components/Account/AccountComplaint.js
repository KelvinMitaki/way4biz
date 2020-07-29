import React from "react";
import "./AccountComplaint.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import ScreenLoader from "../Pages/ScreenLoader";

class AccountComplaint extends React.Component {
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
                <div
                  onClick={() => this.props.history.goBack()}
                  className="container"
                >
                  <IconContext.Provider
                    value={{ className: "arrow-icon ml-3 my-2" }}
                  >
                    <div className="d-flex align-items-center">
                      <div style={{ cursor: "pointer" }}>
                        <BsArrowLeft />
                      </div>
                      <h3 className="ml-3">Complaint</h3>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="container">
                  <div className="box-container account-individual-complain">
                    <h5 className="my-1">
                      <strong className="mr-1">Seller:</strong>Quavo
                    </h5>
                    <h6 className="my-1">
                      <strong className="mr-1">Item:</strong>Saweerie
                    </h6>
                    <p className="my-1">
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
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
const mapStateToProps = state => {
  return {};
};
export default withRouter(connect(mapStateToProps)(AccountComplaint));
