import React from "react";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import "./AdminDashBoardOrderItems.css";
import { Link, withRouter } from "react-router-dom";
import { fetchAdminOrder } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";

class AdminDashBoardOrderItems extends React.Component {
  componentDidMount() {
    this.props.fetchAdminOrder(
      this.props.match.params.orderId,
      this.props.history
    );
  }
  render() {
    if (!this.props.adminOrder) return <ScreenLoader />;
    return (
      <div className="container-fluid p-0 mb-5">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container mt-4">
          <div className="box-container admin-order-items-wrapper">
            <div
              className="d-flex align-items-center"
              style={{ width: "80%", margin: "auto" }}
            >
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-2" }}
              >
                <div>
                  <Link to="/">
                    <BsArrowLeft />
                  </Link>
                </div>
              </IconContext.Provider>
              <h3 className="ml-2">Ordered Items</h3>
            </div>

            <div className="container">
              <div className="row y order-title">
                <div className="col-md-3">
                  <h6 style={{ paddingLeft: "20%" }}>Item</h6>
                </div>
                <div className="col-md-5">
                  <h6>Item Info</h6>
                </div>
                <div className="col-md-4">
                  <h6>Seller</h6>
                </div>
              </div>
              <div className="individual-order-item">
                {/* mapping here */}
                {this.props.adminOrder["0"].product.length !== 0 &&
                  this.props.adminOrder["0"].product.map(p => (
                    <div
                      key={p._id}
                      className="box-container row align-items-center"
                      style={{ borderLeft: "3px solid #f76b1a" }}
                    >
                      <div className="col-md-3">
                        <img
                          width={"100px"}
                          src={
                            p.imageUrl[0].includes("http")
                              ? p.imageUrl[0]
                              : `https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${p.imageUrl[0]} `
                          }
                        />
                      </div>
                      <div className="col-md-5 admin-order-product">
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            this.props.history.push(`/product/${p._id}`)
                          }
                        >
                          {p.name}
                        </p>
                        <p>
                          <strong>Ksh.</strong>
                          {p.price.toLocaleString()}{" "}
                        </p>
                        <p>
                          <strong>Qty: </strong>
                          {
                            this.props.adminOrder["0"].items.find(
                              it => it.product === p._id
                            ).quantity
                          }
                        </p>
                      </div>
                      <div className="col-md-4 p-0">
                        <p>
                          <strong className="x mr-1">Seller:</strong>
                          {this.props.adminOrder["0"].seller[0].firstName}{" "}
                          {this.props.adminOrder["0"].seller[0].lastName}
                        </p>
                        <p>
                          <Link to="/seller/store">Visit Store</Link>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    adminOrder: state.product.adminOrder
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchAdminOrder })(AdminDashBoardOrderItems)
);
