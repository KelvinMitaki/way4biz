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
              <h6>
                We want you to be happy with your purchase. If you are not
                completely satisfied, you can return the product to us and we
                will either repair/replace it, or credit your account, subject
                to the below terms. This Policy applies to products bought from
                Way4Biz This Policy forms part of the Way4Biz Terms and
                Conditions, and so words defined in the Terms and Conditions
                have the same meaning in this Policy, unless the context
                indicates otherwise. Nothing in this Policy is intended to limit
                your statutory rights in any way.
              </h6>

              <h4>Preparing your products for a return</h4>
              <h6>
                To ensure your request is processed as quickly as possible you
                are responsible for the following when returning your products;
              </h6>
              <ul>
                <li>
                  <p>
                    package your products safely and securely for protection
                    during transit;
                  </p>
                </li>
                <li>
                  <p>
                    clearly mark your return reference number on the outside of
                    the parcel; and
                  </p>
                </li>
                <li>
                  <p>
                    include all accessories and parts that were sold with the
                    product.
                  </p>
                </li>
              </ul>
              <h6>
                Failure to adhere to any of these requirements could delay the
                processing of your request or result in its decline altogether.
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReturnPolicy;
