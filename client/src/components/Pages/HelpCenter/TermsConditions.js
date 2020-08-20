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
