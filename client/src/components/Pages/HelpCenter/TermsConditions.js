import React from "react";

import "./TermsConditions.css";
import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";
import HelpCenterHeader from "./HelpCenterHeader";

class TermsConditions extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content white-body">
          <HelpCenterHeader />

          <div className="container">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Terms and Conditions
            </h3>
            <div className="terms-content">
              <h3>Introduction</h3>
              <p>Way4Biz is a 2 in 1 company that operates on an e-commerce platform consisting of a web application and mobile applications(Ecommerce platform application and a logistics application) ,supporting logistics and payment infrastructure, for the sale,purchase and delivery of consumer products.</p>
              <p>These Way4Biz general terms and conditions shall apply to buyers and sellers on the platforms and shall govern the use of the platform and related services.</p>
              <p>By using our platform, you accept these general terms and conditions in full. If you disagree with anything then you should not use our platform.</p>
              <p>You can only use our platform to expand your business marketing strategy or in delivering your goods if and only if you agree to this terms and conditions</p>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default TermsConditions;
