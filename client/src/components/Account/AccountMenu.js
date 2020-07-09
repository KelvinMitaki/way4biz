import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./AccountMenu.css";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { GoClippy } from "react-icons/go";

export class AccountMenu extends Component {
  render() {
    return (
      <div className="box-container account-menu-container">
        <div className="account-menu-wrapper">
          <NavLink
            activeClassName="account-active"
            to="/account"
            className="navlink"
          >
            <AiOutlineUser />
            <span className="ml-2">My Account</span>
          </NavLink>
        </div>
        <br />
        <div className="account-menu-wrapper">
          <NavLink
            activeClassName="account-active"
            to="/orders"
            className="navlink"
          >
            <GoClippy />
            <span className="ml-2">Orders</span>
          </NavLink>
        </div>
        <br />
        <div className="account-menu-wrapper">
          <NavLink
            activeClassName="account-active"
            to="/wishlist"
            className="navlink"
          >
            <AiOutlineHeart />
            <span className="ml-2">Wishlist</span>
          </NavLink>
        </div>
        <br />
        <div className="account-menu-wrapper">
          <NavLink
            activeClassName="account-active"
            to="/pending/reviews"
            className="navlink"
          >
            <MdRateReview />
            <span className="ml-2">Pending Reviews</span>
          </NavLink>
        </div>
        <br />
        <div className="account-menu-wrapper account-logout-wrapper">
          <a
            id="account-logout"
            // className="logout-link"
            href="/api/logout"
            className="navlink"
          >
            Logout
          </a>
        </div>
        <br />
        {/* <br /> */}
      </div>
    );
  }
}

export default AccountMenu;
