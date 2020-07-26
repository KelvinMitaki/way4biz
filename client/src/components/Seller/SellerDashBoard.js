import React from "react";

import "./SellerDashBoard.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { connect } from "react-redux";
import { fetchSellerNewOrders } from "../../redux/actions";

class SellerDashBoard extends React.Component {
  componentDidMount() {
    this.props.fetchSellerNewOrders();
  }
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        {this.props.user && (
          <React.Fragment>
            <SellerDashBoardHeader />
            <div className="row no-gutters">
              <div className="col-lg-3">
                <SellerDashBoardMenu />
              </div>
              <div className="col-lg-9 mx-auto">
                <div className="dashboard-content">
                  <h1 style={{ textAlign: "center" }}>
                    Welcome {this.props.user.firstName}
                    <hr />
                    <div className="container">
                      <div className="row mt-5">
                        <div>
                          <h3 className="my-2">Store Summary</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="box-container big-number-wrapper">
                            <h1 className="big-number">0</h1>
                            <h6>NEW ORDERS</h6>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="box-container big-number-wrapper">
                            <h1 className="big-number">0</h1>
                            <h6>Months</h6>
                            <h6>SELLING ON WAY4BIZ</h6>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div>
                          <h3 className="my-2">Store Performance</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="box-container big-number-wrapper">
                            <h1 className="big-number">0</h1>
                            <h6>SUCCESSFUL SALES</h6>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="box-container big-number-wrapper">
                            <h1 className="big-number">0</h1>
                            <h6>QUALITY RATING</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, { fetchSellerNewOrders })(
  SellerDashBoard
);
