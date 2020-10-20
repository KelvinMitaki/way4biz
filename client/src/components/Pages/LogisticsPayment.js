import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import "./LogisticsPayment.css";
import MobileLogo from "../Header/MobileLogo";
import { Link, Redirect } from "react-router-dom";
import { confirmLogisticsDelivery, fetchDelivery } from "../../redux/actions";
import ScreenLoader from "./ScreenLoader";
import NotFound from "./NotFound";
import { BsCheckCircle } from "react-icons/bs";

class LogisticsPayment extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDelivery(this.props.match.params.deliveryId);
  }
  render() {
    if (!this.props.fetchedDelivery) {
      return <ScreenLoader />;
    }
    if (this.props.fetchedDelivery === "") {
      return <NotFound />;
    }
    if (
      !this.props.user ||
      (this.props.user &&
        this.props.user._id !== this.props.fetchedDelivery.user)
    ) {
      return <Redirect to="/" />;
    }
    console.log(this.props.driver);
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <Header />
          <div className="container-fluid white-body logistics-payment-wrapper">
            {/* show this before payment */}
            <div className="col-md-7 col-lg-5 mx-auto text-left pt-5">
              <h4 className="mb-3">You are almost done!</h4>
              <p className="mb-1">
                The service will cost you ksh.{" "}
                {Math.round(this.props.fetchedDelivery.charge).toLocaleString()}
                . You will be required to give the payment to the delivery guy
                together with the item to deliver.
              </p>

              <div className="ml-3 text-left logisitics-confirm-details">
                <h5>Details</h5>
                <p>
                  <b>Sender: </b>Patrick Thumbi
                </p>
                <p>
                  <b>Phone: </b>079900000
                </p>
                <p>
                  <b>Item Name: </b>Pizza
                </p>
                <p>
                  <b>Item Qty: </b>1 Piece
                </p>
                <p>
                  <b>From: </b>Rongai Tuskys
                </p>
                <p>
                  <b>To: </b>Thika Road Mall
                </p>
                <p>
                  <b>Recipient: </b>Stacy Mwangi
                </p>
                <p>
                  <b>Phone: </b>079900000
                </p>

                <Link to="/logistics">Edit</Link>
              </div>

              <p className="mt-1">
                Please confirm payment and we will have someone come pick your
                item for delivery.
              </p>
              <button
                onClick={() => {
                  this.props.confirmLogisticsDelivery(
                    this.props.match.params.deliveryId
                  );
                }}
                className="btn btn-md my-3 secondary-button logistics-confirm-payment"
                disabled={this.props.fetchedDelivery.confirmed}
              >
                Confirm Payment
              </button>
            </div>
            {/* show this after payment */}
            {/* <div className="col-md-7 col-lg-5 mx-auto text-center pt-5">
              <div className="d-flex align-items-center justify-content-center">
                <BsCheckCircle
                  style={{ fontSize: "100px", color: "#4BB543" }}
                />
              </div>
              <h4 className="mb-3">The driver is on the way!</h4>
              <div className="ml-2 logistics-driver-details">
                <h5>Driver Details</h5>
                <p>
                  <b>Driver Phone: </b>0799000000
                </p>
                <p>
                  <b>Vehicle No.: </b>KMCM 413D
                </p>
              </div>
              <p>You will be notified when he arrives.</p>
            </div> */}
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    fetchedDelivery: state.user.fetchedDelivery,
    driver: state.user.driver
  };
};
export default connect(mapStateToProps, {
  fetchDelivery,
  confirmLogisticsDelivery
})(LogisticsPayment);
