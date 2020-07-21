import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashBoardOrders.css";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import { IconContext } from "react-icons";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

class AdminDashBoardOrders extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div
          className="container mt-4 py-2 m-0 mx-auto "
          style={{ backgroundColor: "#fff" }}
        >
          <div className="my-1" style={{ textAlign: "center" }}>
            <h3>Orders</h3>
          </div>
          <div className="admin-order-search-filter">
            <div className="form-group input-group search">
              <input
                className="form-control"
                type="text"
                placeholder="Search order ID..."
              />
              <div className="input-group-append">
                <button id="order-search-btn">
                  <IconContext.Provider value={{ className: "mr-1 " }}>
                    <div className="icon-container">
                      <AiOutlineSearch style={{ fontSize: "20px" }} />
                      <span>Search</span>
                    </div>
                  </IconContext.Provider>
                </button>
              </div>
            </div>
            <div className="filter">
              <div className="admin-filter">
                <div className="admin-filter-icon">
                  <span className="y">Filter:</span>
                  <FiFilter style={{ fontSize: "25px" }} />
                </div>
                <div className="filter-options">
                  <div className="radio">
                    <input name="filter-order" type="radio" id="radio_33" />
                    <label htmlFor="radio_33" className="m-0">
                      Today
                    </label>
                  </div>
                  <div className="radio">
                    <input name="filter-order" type="radio" id="radio_44" />
                    <label htmlFor="radio_44" className="m-0">
                      Last Week
                    </label>
                  </div>
                  <div className="radio">
                    <input name="filter-order" type="radio" id="radio_55" />
                    <label htmlFor="radio_55" className="m-0">
                      Last Month
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mapping here */}
          <div className="admin-dashboard-order-wrapper box-container">
            <div className="admin-dashboard-order p-3">
              <div className="row">
                <div className="col-md-5">
                  <strong>Order ID: </strong>
                  <span>123456</span>{" "}
                </div>
                <div className="col-md-5">
                  <strong>Date: </strong>
                  <span>1/1/01</span>
                </div>
                <div className="col-md-2">
                  <Link
                    className="admin-order-view-more-link"
                    to="/admin-order"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardOrders;
