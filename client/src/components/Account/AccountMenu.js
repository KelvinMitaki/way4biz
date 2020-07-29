import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./AccountMenu.css";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { GoClippy } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";

export class AccountMenu extends Component {
  render() {
    return (
      <div className="box-container account-menu-container mb-3 p-0">
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

        <div className="account-menu-wrapper">
          <NavLink
            activeClassName="account-active"
            to="/complaints"
            className="navlink"
          >
            <BsQuestionCircle />
            <span className="ml-2">Complaints</span>
          </NavLink>
        </div>

        <div
          id="account-logout"
          className="account-menu-wrapper account-logout-wrapper"
          onClick={() => (window.location.href = "/api/logout")}
        >
          Logout
        </div>
        <br />
        {/* <br /> */}
      </div>
    );
  }
}

export default AccountMenu;
