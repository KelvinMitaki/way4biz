import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./AccountMenu.css";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
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
          <a id="account-logout" href="/api/logout" className="navlink">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default AccountMenu;
