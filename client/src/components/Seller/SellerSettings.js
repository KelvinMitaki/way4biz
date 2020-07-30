import React from "react";

import "./SellerSettings.css";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { reduxForm, Field } from "redux-form";
import SellerInput from "./SellerInput";

class SellerSettings extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mx-auto py-3 box-container">
            {/* <h3 style={{ textAlign: "center" }} className="my-2">
              Settings
            </h3> */}
            <div className="container">
              <form className="form-group store-settings-form">
                <h3
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Personal Details
                </h3>
                <label htmlFor="seller-name">Name</label>
                <input className="form-control" id="seller-name" type="text" />
                <label htmlFor="phone">Phone</label>
                <input className="form-control" id="phone" type="text" />
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" type="text" />
                <h3
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Store Details
                </h3>
                <Field
                  label="test"
                  name="firstName"
                  htmlFor="firstName"
                  component={SellerInput}
                  type="text"
                  placeholder="Your Name"
                />
                <label htmlFor="store-name">Store Name</label>
                <input className="form-control" id="store-name" type="text" />
                <label htmlFor="store-description">Description</label>
                <textarea
                  className="form-control"
                  id="store-description"
                  type="text"
                ></textarea>
              </form>
              <button className="btn store-settings-btn mt-3">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "SellerSettings" })(SellerSettings);
