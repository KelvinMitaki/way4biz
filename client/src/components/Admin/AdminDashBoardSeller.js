import React from "react";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link, withRouter } from "react-router-dom";
import "./AdminDashBoardSeller.css";
import { connect } from "react-redux";
import { fetchVerifiedSeller } from "../../redux/actions";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoardSeller extends React.Component {
  componentDidMount() {
    this.props.fetchVerifiedSeller(
      this.props.match.params.sellerId,
      this.props.history
    );
  }
  render() {
    if (!this.props.verifiedSeller) return <ScreenLoader />;
    if (this.props.verifiedSeller) {
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
                  <Link to="/admin-sellers">
                    <BsArrowLeft />
                  </Link>
                  <h3 className="ml-3">Seller ID</h3>
                </div>
              </IconContext.Provider>
              <div className="admin-individual-seller-details">
                <div className="custom-row">
                  <h5>
                    <strong>Name: </strong>
                    {this.props.verifiedSeller.firstName}{" "}
                    {this.props.verifiedSeller.lastName}
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>StoreName:</strong>
                    {this.props.verifiedSeller.storeName}
                  </h5>
                </div>

                <div className="custom-row">
                  <h5>
                    <strong>Date Joined:</strong>
                    {new Date(
                      this.props.verifiedSeller.createdAt
                    ).toLocaleString()}
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>Phone:</strong>
                    {this.props.verifiedSeller.storeName}
                  </h5>
                </div>
                <div className="custom-row">
                  <h5>
                    <strong>Email:</strong>
                    {this.props.verifiedSeller.storeName}
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
            </div>
          </div>
        </div>
      );
    }
    return <ScreenLoader />;
  }
}
const mapStateToProps = (state) => {
  return {
    verifiedSeller: state.sellerRegister.verifiedSeller,
    fetchSellersLoading: state.sellerRegister.fetchSellersLoading,
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchVerifiedSeller })(AdminDashBoardSeller)
);
