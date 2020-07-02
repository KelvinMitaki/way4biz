import React from "react";

import "./SellerDashBoard.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { connect } from "react-redux";

class SellerDashBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        {this.props.user && (
          <React.Fragment>
            <SellerDashBoardHeader />
            <div className="row no-gutters">
              <div className="col-md-3">
                <SellerDashBoardMenu />
              </div>
              <div className="col-md-9">
                <div className="dashboard-content">
                  <h1 style={{ textAlign: "center" }}>
                    Welcome {this.props.user.firstName}
                  </h1>
                  <hr />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(SellerDashBoard);
