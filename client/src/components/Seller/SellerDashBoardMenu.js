import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { GoClippy, GoSettings } from "react-icons/go";

import "./SellerDashBoardMenu.css";

class SellerDashBoardMenu extends React.Component {
  render() {
    return (
      <div className="primary-background" id="seller-dashboard-menu">
        <ul id="seller-menu-items">
          <NavLink
            className="link"
            activeClassName="seller-menu-active"
            to="/seller-dashboard"
          >
            <li>
              <RiDashboardLine className="mr-2" />
              Dashboard
            </li>
          </NavLink>
          <NavLink
            className="link"
            activeClassName="seller-menu-active"
            to="/seller-products"
          >
            <li>
              <BsFillBagFill className="mr-2" />
              Products
            </li>
          </NavLink>
          <NavLink
            className="link"
            activeClassName="seller-menu-active"
            to="/seller-orders"
          >
            <li>
              <GoClippy className="mr-2" />
              Orders
            </li>
          </NavLink>
          <NavLink
            className="link"
            activeClassName="seller-menu-active"
            to="/seller-review"
          >
            <li>
              <MdRateReview className="mr-2" />
              Reviews
            </li>
          </NavLink>
          <NavLink
            className="link"
            activeClassName="seller-menu-active"
            to="/seller/settings"
          >
            <li>
              <GoSettings className="mr-2" />
              Settings
            </li>
          </NavLink>
        </ul>
        <div id="seller-menu-profile">Profile</div>
      </div>
    );
  }
}

export default SellerDashBoardMenu;
