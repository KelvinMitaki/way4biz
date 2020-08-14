import React from "react";

import "./AdminDashBoardInbox.css";
import MobileLogo from "../Header/MobileLogo";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { fetchAdminInbox } from "../../redux/actions";

class AdminDashBoardInbox extends React.Component {
  componentDidMount() {
    this.props.fetchAdminInbox();
  }
  render() {
    if (this.props.inboxLoading) return <ScreenLoader />;
    return (
      <div className="container-fluid dashboard-wrapper">
        <MobileLogo />
        <AdminDashBoardHeader />
        <div className="container-fluid p-0">
          <AdminDashboardSecondaryHeader />
          <div className="container box-container mt-3">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Inbox
            </h3>
            <div className="box-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <h6>
                    <strong>First Name:</strong>Frank
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Last Name:</strong>Zagarino
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Email:</strong>franc@gmail.com
                  </h6>
                </div>
              </div>
              <h6 className="my-2">
                <strong>Subject:</strong>Order Delay
              </h6>
              <p className="my-2">
                The quick brown fox jumped over the lazy dog. The quick brown
                fox jumped over the lazy dog. The quick brown fox jumped over
                the lazy dog.The quick brown fox jumped over the lazy dog.
              </p>
            </div>
            <div className="box-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <h6>
                    <strong>First Name:</strong>Frank
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Last Name:</strong>Zagarino
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Email:</strong>franc@gmail.com
                  </h6>
                </div>
              </div>
              <h6 className="my-2">
                <strong>Subject:</strong>Order Delay
              </h6>
              <p className="my-2">
                The quick brown fox jumped over the lazy dog. The quick brown
                fox jumped over the lazy dog. The quick brown fox jumped over
                the lazy dog.The quick brown fox jumped over the lazy dog.
              </p>
            </div>
            <div className="box-container p-2">
              <div className="row">
                <div className="col-md-4">
                  <h6>
                    <strong>First Name:</strong>Frank
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Last Name:</strong>Zagarino
                  </h6>
                </div>
                <div className="col-md-4">
                  <h6>
                    <strong>Email:</strong>franc@gmail.com
                  </h6>
                </div>
              </div>
              <h6 className="my-2">
                <strong>Subject:</strong>Order Delay
              </h6>
              <p className="my-2">
                The quick brown fox jumped over the lazy dog. The quick brown
                fox jumped over the lazy dog. The quick brown fox jumped over
                the lazy dog.The quick brown fox jumped over the lazy dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inbox: state.admin.inbox,
    inboxLoading: state.admin.inboxLoading
  };
};
export default connect(mapStateToProps, { fetchAdminInbox })(
  AdminDashBoardInbox
);
