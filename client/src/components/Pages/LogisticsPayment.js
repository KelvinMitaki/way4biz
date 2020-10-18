import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import "./LogisticsPayment.css";
import MobileLogo from "../Header/MobileLogo";
import { BsCheckCircle } from "react-icons/bs";

class LogisticsPayment extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <Header />
          <div className="container-fluid white-body logistics-payment-wrapper">
            {/* show this before payment */}
            <div className="container text-center pt-5">
              <h4 className="mb-3">You are almost done!</h4>
              <p>
                The service will cost you ksh.500. You will be required to pay
                the payment to the delivery guy together with the item to
                deliver.
              </p>
              <p>
                Please confirm payment and we will have someone come pick your
                item for delivery.
              </p>
              <button className="btn btn-md mt-3 secondary-button logistics-confirm-payment">
                Confirm Payment
              </button>
            </div>
            {/* show this after payment */}
            <div className="container text-center pt-5">
              <div className="d-flex align-items-center justify-content-center">
                <BsCheckCircle
                  style={{ fontSize: "100px", color: "#4BB543" }}
                />
              </div>
              <h4 className="mb-3">He is on the way!</h4>
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
export default connect(mapStateToProps)(LogisticsPayment);
