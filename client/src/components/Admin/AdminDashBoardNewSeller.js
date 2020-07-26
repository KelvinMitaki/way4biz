import React from "react";

import "./AdminDashBoardNewSeller.css";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link, withRouter, Redirect } from "react-router-dom";
import { fetchNewSeller } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoardSeller extends React.Component {
  componentDidMount() {
    this.props.fetchNewSeller(
      this.props.match.params.sellerId,
      this.props.history
    );
  }
  render() {
    if (this.props.newSellerLoading) return <ScreenLoader />;
    if (!this.props.newSeller) return <ScreenLoader />;
    if (this.props.newSeller && Object.keys(this.props.newSeller) !== 0) {
      const {
        firstName,
        lastName,
        storeName,
        createdAt,
      } = this.props.newSeller;
      return (
        <div className="container-fluid p-0 mb-5">
          <DashBoardHeader />
          <SecondaryHeader />
          <div className="mt-4 container">
            <div className="box-container">
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-2" }}
              >
                <div className="d-flex align-items-center">
                  <Link to="/admin-new-sellers">
                    <BsArrowLeft />
                  </Link>
                </div>
              </IconContext.Provider>
              <div className="admin-individual-seller-details">
                <div className="custom-row">
                  <h5>
                    <strong>Name: </strong>
                    John Doe
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>StoreName:</strong>
                    Lenovo Outsource
                  </h5>
                </div>

                <div className="custom-row">
                  <h5>
                    <strong>Date Joined:</strong>
                    yesterday
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>Phone:</strong>
                    600
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>Email:</strong>
                    mackenzie@yahoo.com
                  </h5>
                </div>
                <div>
                  <h5 className="mb-2">
                    <strong>Store Description</strong>
                  </h5>
                  <p>
                    The quic brown fox jumped over the lazy dog.The quic brown
                    fox jumped over the lazy dog. The quic brown fox jumped over
                    the lazy dog. The quic brown fox jumped over the lazy dog.
                    The quic brown fox jumped over the lazy dog. The quic brown
                    fox jumped over the lazy dog.The quic brown fox jumped over
                    the lazy dog.The quic brown fox jumped over the lazy dog.The
                    quic brown fox jumped over the lazy dog.The quic brown fox
                    jumped over the lazy dog.The quic brown fox jumped over the
                    lazy dog.The quic brown fox jumped over the lazy dog.The
                    quic brown fox jumped over the lazy dog.The quic brown fox
                    jumped over the lazy dog.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2">
                    <strong>Seller Documents</strong>
                  </h5>
                  <div className="seller-images">
                    <div>
                      <img src="/1.jpg" />
                    </div>
                    <div>
                      <img src="/1.jpg" />
                    </div>
                    <div>
                      <img src="/1.jpg" />
                    </div>
                    <div>
                      <img src="/1.jpg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accept-sell-request">
                <button className="btn btn-block accept-sell-request-btn">
                  Accept Seller Request
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}
const mapStateToProps = (state) => {
  return {
    newSeller: state.sellerRegister.newSeller,
    newSellerLoading: state.sellerRegister.newSellerLoading,
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchNewSeller })(AdminDashBoardSeller)
);
