import React from "react";

import "./AdminDashBoardNewProduct.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { Link, withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { fetchReviewProduct } from "../../redux/actions";

class AdminDashBoardNewProduct extends React.Component {
  componentDidMount() {
    this.props.fetchReviewProduct(this.props.match.params.productId);
  }
  render() {
    if (!this.props.reviewProduct) return <ScreenLoader />;
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container box-container mt-4">
          <IconContext.Provider value={{ className: "arrow-icon ml-3 my-2" }}>
            <div className="d-flex align-items-center">
              <Link to="/admin/new-products">
                <BsArrowLeft />
              </Link>
              <h3 className="ml-1">Product Details</h3>
            </div>
          </IconContext.Provider>
          <div className="admin-new-product-details mt-3">
            <div className="custom-row">
              <h6>
                <strong>Owner: </strong>Kijeketile Ngware
              </h6>
            </div>
            <div className="custom-row">
              <h6>
                <strong>Contact: </strong>9999
              </h6>
            </div>
            <div className="custom-row">
              <h6>
                <strong>Email: </strong>9999
              </h6>
            </div>
            <div className="custom-row">
              <h6>
                <strong>Store Name: </strong>9999
              </h6>
            </div>
            <div className="custom-row">
              <h6>
                <strong>Product Name: </strong>Great Beer Of Congo
              </h6>
            </div>
            <div className="custom-row">
              <h6>
                <strong>Quantity</strong>10
              </h6>
            </div>
            <div className="admin-new-product-images">
              <img src="/1.jpg" />
              <img src="/1.jpg" />
              <img src="/1.jpg" />
              <img src="/1.jpg" />
            </div>
          </div>
          <div className="admin-new-product-buttons my-2">
            <Link to="/" className="btn btn-lg accept-product-btn">
              Accept Product
            </Link>
            <div id="dummy-space"></div>
            <Link
              to="/admin/root/new-product/why-reject"
              className="btn btn-lg reject-product-btn"
            >
              Reject Product
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviewProduct: state.product.reviewProduct
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchReviewProduct })(AdminDashBoardNewProduct)
);
