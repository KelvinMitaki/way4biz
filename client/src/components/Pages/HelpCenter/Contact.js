import React from "react";

import "./Contact.css";
import HelpCenterHeader from "./HelpCenterHeader";
import Footer from "../../Footer/Footer";
import MiniMenuWrapper from "../../MiniMenuWrapper/MiniMenuWrapper";

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
              <h3 style={{ textAlign: "center" }}>Contact Us</h3>
              <form className="form-group mt-4">
                <label htmlFor="contact-reason">Reason</label>
                <select className="form-control" id="contact-reason">
                  <option value="suggestion">Suggestion</option>
                  <option value="feedback">Feedback</option>
                </select>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="contact-first-name">First Name</label>
                    <input
                      className="form-control"
                      id="contact-first-name"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contact-last-name">Last Name</label>
                    <input
                      className="form-control"
                      id="contact-last-name"
                      type="text"
                    />
                  </div>
                </div>
                <label htmlFor="contact-email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  id="contact-email"
                />
                <label htmlFor="contact-subject">Subject</label>
                <input
                  className="form-control"
                  type="text"
                  id="contact-subject"
                />
                <label htmlFor="contact-message">Message</label>
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

export default Contact;
