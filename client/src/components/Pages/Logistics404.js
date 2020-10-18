import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import "./Logistics404.css";
import MobileLogo from "../Header/MobileLogo";

class Logistics404 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <Header />
          <div className="container-fluid white-body logistics-404">
            <div className="container text-center pt-5">
              <div className="d-flex align-items-center justify-content-center"></div>
              <h4 className="mb-3">The driver is on the way!</h4>
              <p>You will be notified when he arrives.</p>
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
export default connect(mapStateToProps)(Logistics404);
