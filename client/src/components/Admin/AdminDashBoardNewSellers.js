import React from "react";

import "./AdminDashBoardNewSellers.css";
import DashBoardHeader from "./AdminDashBoardHeader";
import SecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link } from "react-router-dom";
import { fetchNewSellers } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashBoardNewSellers extends React.Component {
  componentDidMount() {
    this.props.fetchNewSellers();
  }
  render() {
    if (!this.props.newSellers) return <ScreenLoader />;
    if (this.props.newSellers && this.props.newSellers.length !== 0) {
      return (
        <div className="container-fluid p-0">
          <DashBoardHeader />
          <SecondaryHeader />
          <div className="container box-container mt-4">
            <div className="col">
              <h3 style={{ textAlign: "center" }}>New Sellers</h3>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="row y">
                  <div className="col-md-6">
                    <h6 style={{ paddingLeft: "15px" }}>Seller Info</h6>
                  </div>
                  <div className="col-md-3">
                    <h6>Date Joined</h6>
                  </div>
                  <div className="col-md-3">
                    <h6>More</h6>
                  </div>
                </div>
                {/* mapping here */}
                {this.props.newSellers.map(seller => (
                  <div className="admin-new-seller container">
                    <div className="row box-container">
                      <div className="col-md-6">
                        <div className="admin-seller-details">
                          <p>
                            <strong className="x mr-2">Name:</strong>
                            {seller.firstName} {seller.lastName}
                          </p>
                          <p>
                            <strong className="x mr-2">StoreName:</strong>
                            {seller.storeName}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 d-flex align-items-center">
                        <p>
                          <strong className="x mr-2">Date Joined</strong>
                          {new Date(seller.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="col-md-3 d-flex align-items-center">
                        <p>
                          <Link
                            to="/admin-new-seller"
                            className="admin-seller-view-more"
                          >
                            View More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <h3>
        {/* style it later */}
        no new sellers
      </h3>
    );
  }
}
const mapStateToProps = state => {
  return {
    newSellers: state.sellerRegister.newSellers
  };
};
export default connect(mapStateToProps, { fetchNewSellers })(
  AdminDashBoardNewSellers
);
