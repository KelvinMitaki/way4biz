import React from "react";

import "./AdminDashBoardInbox.css";
import MobileLogo from "../Header/MobileLogo";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { connect } from "react-redux";
import { fetchAdminInbox } from "../../redux/actions";
import ScreenLoader from "../Pages/ScreenLoader";

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
            {this.props.inbox &&
              this.props.inbox.length !== 0 &&
              this.props.inbox.map((contact) => (
                <div
                  key={contact._id}
                  className="box-container p-2"
                  style={{ borderLeft: "3px solid #f76b1a" }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <h6>
                        <strong>First Name: </strong>
                        {contact.user
                          ? contact.user.firstName
                          : contact.userSeller.firstName}
                      </h6>
                    </div>
                    <div className="col-md-4">
                      <h6>
                        <strong>Last Name: </strong>
                        {contact.user
                          ? contact.user.lastName
                          : contact.userSeller.lastName}
                      </h6>
                    </div>
                    <div className="col-md-4">
                      <h6>
                        <strong>Email: </strong>
                        {contact.user
                          ? contact.user.email
                          : contact.userSeller.email}
                      </h6>
                    </div>
                  </div>
                  <h6 className="my-2">
                    <strong>Subject: </strong>
                    {contact.subject}
                  </h6>
                  <p className="my-2">{contact.message}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inbox: state.admin.inbox,
    inboxLoading: state.admin.inboxLoading,
  };
};
export default connect(mapStateToProps, { fetchAdminInbox })(
  AdminDashBoardInbox
);
