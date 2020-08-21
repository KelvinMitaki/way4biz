import React from "react";
import HelpCenterHeader from "./HelpCenterHeader";
import "./ReturnPolicy.css";

class ReturnPolicy extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content white-body">
          <HelpCenterHeader />
          <div className="container">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Return Policy
            </h3>
            <div className="return-content">
              <p>
                We want you to be happy with your purchase. If you are not
                completely satisfied, you can return the product to us and we
                will either repair/replace it, or credit your account, subject
                to the below terms. This Policy applies to products bought from
                Way4Biz This Policy forms part of the Way4Biz Terms and
                Conditions, and so words defined in the Terms and Conditions
                have the same meaning in this Policy, unless the context
                indicates otherwise. Nothing in this Policy is intended to limit
                your statutory rights in any way.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReturnPolicy;
