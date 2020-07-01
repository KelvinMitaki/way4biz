import React from "react";
import { NavLink } from "react-router-dom";

import "./SellerDashBoardHeader.css";
import Logo from "../Header/Logo";
import ProfileImage from "../Header/ProfileImage";
import SellerHamburger from "./SellerHamburgerMenu";

class SellerDashBoardHeader extends React.Component {
  render() {
    return (
      <div className="primary-background d-flex" id="seller-dashboard-header">
        <SellerHamburger />
        <Logo id="seller-logo" />
        <ul id="seller-header-menu-items">
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-acive"
              to="/buy"
            >
              Buy
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-acive"
              to="/seller-products"
            >
              Sell
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-acive"
              to="/seller-orders"
            >
              Do Something
            </NavLink>
          </li>
          <li className="my-4">
            <a className="link logout-seller-db-header-link" href="/api/logout">
              Logout
            </a>
          </li>
        </ul>
        <ProfileImage />
      </div>
    );
  }
}

export default SellerDashBoardHeader;
