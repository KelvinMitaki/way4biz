import React from "react";

import "./SellerOrderDetails.css";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

class SellerOrderDetails extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-md-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mt-5">
            <div>
              <IconContext.Provider
                value={{ className: "arrow-icon ml-3 my-3" }}
              >
                <div>
                  <Link to="/seller-orders">
                    <BsArrowLeft />
                  </Link>
                </div>
              </IconContext.Provider>
            </div>
            <div>
              <h3 style={{ textAlign: "center" }}>Ordered Items</h3>
            </div>
            <div className="seller-db-order-details-wrapper">
              <div className="order-product" title="{product.name}">
                <img src="/1.jpg" alt="{product.name}" />
                <div>
                  <p className="product-name">10 items</p>
                  <p className="price">Ksh.10,000 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerOrderDetails;
