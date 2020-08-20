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

              <h3>Registration</h3>
              <p>You may register as a buyer or seller on our platform. A seller however can act as a buyer but a buyer cannot act as a seller.</p>
              <p>To register for an account on our platform you need to complete the registration forms as required and submit it.</p>
              <p>If you register for an account with our platform as a buyer, you will be asked to provide an email address which is unique ,a valid phone number and also a password which should be confidential.</p>
              <p>. If you register for an account with our platform as a seller, you will be asked to provide an email address which is unique ,a valid phone number , a password which should be confidential ,your storename and also its description.</p>
              <p>Any activity in your account that may not align with our terms of operation may result to immediate suspension or even deletion of your account.</p>


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
