import React from "react";

import "./Contact.css";
import HelpCenterHeader from "./HelpCenterHeader";
import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ContactInput from "./ContactInput";

class Contact extends React.Component {
  render() {
    if (!this.props.user) return <Redirect to="/sign-in" />;
    const { firstName, lastName } = this.props;
    return (
      <div className="main">
        <div className="content white-body">
          <HelpCenterHeader />
          <div
            className="container-fluid p-0 m-0"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="container">
              <h3 style={{ textAlign: "center" }} className="mt-3">
                Contact Us
              </h3>
              <form className="form-group mt-4">
                <label htmlFor="contact-reason">Reason</label>
                <select className="form-control" id="contact-reason">
                  <option value="suggestion">Suggestion</option>
                  <option value="feedback">Feedback</option>
                </select>
                <div className="row">
                  <Field
                    id="contact-first-name"
                    label="First Name"
                    divClassName="col-md-6"
                    inputClassName="form-control"
                    type="text"
                    component={ContactInput}
                  />
                  <Field
                    id="contact-last-name"
                    label="Last Name"
                    divClassName="col-md-6"
                    inputClassName="form-control"
                    type="text"
                    component={ContactInput}
                  />
                </div>
                <Field
                  id="contact-email"
                  label="Email"
                  inputClassName="form-control"
                  type="text"
                  component={ContactInput}
                />
                <Field
                  id="contact-subject"
                  label="Subject"
                  inputClassName="form-control"
                  type="text"
                  component={ContactInput}
                />
                <Field
                  id="contact-message"
                  label="Message"
                  inputClassName="form-control"
                  type="text"
                  component={ContactInput}
                />

                <textarea
                  className="form-control"
                  id="contact-message"
                ></textarea>

                <button className="btn btn-block contact-btn my-3">Send</button>
              </form>
            </div>
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
    user: state.auth.user
  };
};
export default reduxForm({ form: "Contact" })(
  connect(mapStateToProps)(Contact)
);
