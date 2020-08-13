import React from "react";

import "./Contact.css";
import HelpCenterHeader from "./HelpCenterHeader";
import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";

class Contact extends React.Component {
  render() {
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
              <form
                onSubmit={this.props.handleSubmit(formValues =>
                  console.log(formValues)
                )}
                className="form-group mt-4"
              >
                <label htmlFor="contact-reason">Reason</label>
                <select className="form-control" id="contact-reason">
                  <option value="suggestion">Suggestion</option>
                  <option value="feedback">Feedback</option>
                </select>
                <div className="row">
                  <Field
                    name="firstName"
                    id="contact-first-name"
                    label="First Name"
                    divClassName="col-md-6"
                    inputClassName="form-control"
                    type="text"
                    component={ContactInput}
                  />
                  <Field
                    name="lastName"
                    id="contact-last-name"
                    label="Last Name"
                    divClassName="col-md-6"
                    inputClassName="form-control"
                    type="text"
                    component={ContactInput}
                  />
                </div>
                <Field
                  name="email"
                  id="contact-email"
                  label="Email"
                  inputClassName="form-control"
                  type="text"
                  component={ContactInput}
                />
                <Field
                  name="subject"
                  id="contact-subject"
                  label="Subject"
                  inputClassName="form-control"
                  type="text"
                  component={ContactInput}
                />

                <Field name="message" component={ContactTextArea} />

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
    initialValues: state.auth.user
  };
};
export default connect(mapStateToProps)(
  reduxForm({ form: "Contact" })(Contact)
);
