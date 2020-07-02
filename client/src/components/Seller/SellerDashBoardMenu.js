import React from "react";
import { NavLink } from "react-router-dom";

import "./SellerDashBoardMenu.css";

class SellerDashBoardMenu extends React.Component {
  render() {
    return (
      <div className="primary-background" id="seller-dashboard-menu">
        <ul id="seller-menu-items">
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-products"
            >
              Products
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-orders"
            >
              Orders
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-review"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div id="seller-menu-profile">Profile</div>
      </div>
    );
  }
}

export default SellerDashBoardMenu;
