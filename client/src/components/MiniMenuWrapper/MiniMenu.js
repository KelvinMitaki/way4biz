import React from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "react-png-tooltip";

import { connect } from "react-redux";

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
                <p>Categories</p>
              </div>
            </NavLink>

            <NavLink to="/cart" className="primary-link col-3">
              <div className="mini-menu-item mini-cart">
                <div className="flaticon-shopping-cart mini-menu-icon">
                  <span className="badge">
                    {this.props.cart
                      .map(item => item.quantity)
                      .reduce((cur, acc) => cur + acc, 0)}
                  </span>
                </div>
                <p>Cart</p>
              </div>
            </NavLink>

            {this.props.user ? (
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
                      Wishlist
                    </NavLink>
                    {this.props.user.storeName && (
                      <NavLink className="primary-link" to="/seller-dashboard">
                        My Store
                      </NavLink>
                    )}
                    <a className="mini-logout-link" href="/api/logout">
                      Logout
                    </a>
                  </div>
                </Tooltip>
              </div>
            ) : (
              <NavLink to="/sign-in" className="primary-link col-3">
                <div className="mini-menu-item">
                  <div className="flaticon-user mini-menu-icon"></div>
                  <p>Account</p>
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    cart: state.cartReducer.cart
  };
};

export default connect(mapStateToProps)(MiniMenu);
