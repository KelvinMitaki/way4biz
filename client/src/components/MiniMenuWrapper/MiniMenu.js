import React from "react";
import { Link, NavLink } from "react-router-dom";
import Tooltip from "react-png-tooltip";

import "./MiniMenu.css";

class MiniMenu extends React.Component {
  render() {
    return (
      <div id="mini-menu">
        <div className="container-fluid">
          <div className="row flex-wrap">
            <NavLink to="/" exact className="primary-link col-3">
              <div className="mini-menu-item">
                <div className="flaticon-home mini-menu-icon"></div>
                <p>Home</p>
              </div>
            </NavLink>

            <NavLink to="/categories" className="primary-link col-3">
              <div className="mini-menu-item">
                <div className="flaticon-category mini-menu-icon"></div>
                <p>Category</p>
              </div>
            </NavLink>

            <NavLink to="/cart" className="primary-link col-3">
              <div className="mini-menu-item mini-cart">
                <div className="flaticon-shopping-cart mini-menu-icon">
                  <span className="badge">0</span>
                </div>
                <p>Cart</p>
              </div>
            </NavLink>

            {/* use state to change the directing of this link */}
            {/* <NavLink to="/account" className="primary-link col-3">
              <div className="mini-menu-item">
                <div className="flaticon-user mini-menu-icon"></div>
                <p>Account</p>
              </div>
            </NavLink> */}

            <div className="col-3" id="account-mini-link-wrapper">
              <Tooltip
                className="primary-link tool-tip"
                tooltip={
                  <div className="mini-menu-item">
                    <div className="flaticon-user mini-menu-icon"></div>
                    <p>Account</p>
                  </div>
                }
              >
                <div className="account-mini-links">
                  <NavLink
                    className="primary-link"
                    to="/account"
                    activeClassName="active"
                    exact
                  >
                    My Account
                  </NavLink>
                  <NavLink className="primary-link" to="/orders">
                    Orders
                  </NavLink>
                  <NavLink className="primary-link" to="/wishlist">
                    WishList
                  </NavLink>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniMenu;
