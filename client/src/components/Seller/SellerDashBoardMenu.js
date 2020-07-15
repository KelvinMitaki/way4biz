import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { GoClippy } from "react-icons/go";

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
              <RiDashboardLine className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-products"
            >
              <BsFillBagFill className="mr-2" />
              Products
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-orders"
            >
              <GoClippy className="mr-2" />
              Orders
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              className="link"
              activeClassName="seller-menu-active"
              to="/seller-review"
            >
              <MdRateReview className="mr-2" />
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
