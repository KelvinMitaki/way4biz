import React, { Component } from "react";
import AccountMenu from "./AccountMenu";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./AddReview.css";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import Rating from "../Product/Rating";
import axios from "axios";
import { redirectOnFail } from "../../redux/actions";
import { connect } from "react-redux";
class AddReview extends Component {
  state = {
    review: ""
  };
  componentDidMount() {
    this.props.redirectOnFail(
      this.props.match.params.productId,
      this.props.match.params.orderId,
      this.props.history
    );
  }
  handleChange = e => {
    this.setState({
      review: e.target.value
    });
  };
  render() {
    return (
      <div>
        <AccountHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8 box-container  add-review-wrapper">
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-2" }}
              >
                <div className="d-flex align-items-center">
                  <Link to="/pending/reviews">
                    <BsArrowLeft />
                  </Link>
                  <h3 className="ml-3">Rate Item</h3>
                </div>
              </IconContext.Provider>
              <div className="d-flex justify-content-center my-3">
                <Rating clickable={true} />
              </div>
              <form style={{ textAlign: "center" }}>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control review-field"
                    placeholder="Brian"
                    value={this.state.review}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control review-field"
                    placeholder="eg.I love it,I hate it..."
                    value={this.state.review}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    className="form-control review-field"
                    placeholder="Review here..."
                    value={this.state.review}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="btn btn-md submit-review-btn">
                  Submit Review
                </button>
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

export default withRouter(connect(null, { redirectOnFail })(AddReview));
