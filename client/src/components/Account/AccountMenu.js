import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class AccountMenu extends Component {
  render() {
    return (
      <div>
        AccountMenu
        <hr />
        <NavLink to="/orders">Orders</NavLink>
        <hr />
        <NavLink to="/wishlist">Wishlist</NavLink>
      </div>
    );
  }
}

export default AccountMenu;
