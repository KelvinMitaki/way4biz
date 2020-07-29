import React from "react";
import "./AccountComplaint.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { fetchBuyerComplaint } from "../../redux/actions";
import ScreenLoader from "../Pages/ScreenLoader";
// import ScreenLoader from "../Pages/ScreenLoader";

class AccountComplaint extends React.Component {
  componentDidMount() {
    this.props.fetchBuyerComplaint(this.props.match.params.complaintId);
  }
  render() {
    if (!this.props.buyerComplaint || this.props.buyerComplaintLoading)
      return <ScreenLoader />;
    if (Object.keys(this.props.buyerComplaint).length !== 0) {
      const {
        sellerFiestName,
        sellerLastName,
        body,
        productName
      } = this.props.buyerComplaint;
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
                        <strong className="mr-1">Seller:</strong>
                        {sellerFiestName} {sellerLastName}
                      </h5>
                      <h6 className="my-1">
                        <strong className="mr-1">Item:</strong>
                        {productName}
                      </h6>
                      <p className="my-1">{body}</p>
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
    return <Redirect to="/" />;
  }
}
const mapStateToProps = state => {
  return {
    buyerComplaint: state.product.buyerComplaint,
    buyerComplaintLoading: state.product.buyerComplaintLoading
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchBuyerComplaint })(AccountComplaint)
);
