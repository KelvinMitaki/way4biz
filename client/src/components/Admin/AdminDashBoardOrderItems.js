import React from "react";
import AdminDashBoardHeader from "./AdminDashBoardHeader";
import AdminDashboardSecondaryHeader from "./AdminDashboardSecondaryHeader";
import "./AdminDashBoardOrderItems.css";
import { Link } from "react-router-dom";

class AdminDashBoardOrderItems extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <AdminDashBoardHeader />
        <AdminDashboardSecondaryHeader />
        <div className="container mt-4">
          <div className="box-container admin-order-items-wrapper">
            <h3 style={{ textAlign: "center" }} className="my-2">
              Ordered Items
            </h3>
            <div className="container">
              <div className="row y order-title">
                {/* <div className="col-md-3">
                  <h6>Buyer</h6>
                </div> */}
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
              <div className="box-container individual-order-item">
                {/* mapping here */}
                <div className="row align-items-center">
                  {/* <div className="col-md-3">
                    <p>
                      <strong className="x mr-1">Buyer:</strong>John Doe
                    </p>
                    <p>
                      <Link to="/admin/buyer-info">View Buyer</Link>
                    </p>
                  </div> */}
                  <div className="col-md-3">
                    <img width={"100px"} src="/1.jpg" />
                  </div>
                  <div className="col-md-5">
                    <p>Great Beer Great Beer Great Beer Great Beer</p>
                    <p>Ksh.1500</p>
                    <p>Qty:10</p>
                  </div>
                  <div className="col-md-4 p-0">
                    <p>
                      <strong className="x mr-1">Seller:</strong>Jane Doe
                    </p>
                    <p>
                      <Link to="/seller/store">Visit Store</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashBoardOrderItems;
