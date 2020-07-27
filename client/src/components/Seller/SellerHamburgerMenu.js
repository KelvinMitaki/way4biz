import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink, Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { GoClippy, GoSettings } from "react-icons/go";
import { GiCancel } from "react-icons/gi";

import "./SellerHamburgerMenu.css";

class SellerHamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => {
      return {
        open: !prevState.open,
      };
    });
  }
  render() {
    return (
      <div id="hamburger-menu-wrapper">
        {this.state.open ? (
          <div onClick={this.handleClick} className="back-shed"></div>
        ) : null}
        <HamburgerMenu
          width={20}
          height={15}
          color="#f76b1a"
          isOpen={false}
          menuClicked={this.handleClick}
          onClick={this.handleClick}
          className="seller-hamburger"
        />
        {this.state.open ? (
          <div
            className={`seller-menu-section-wrapper ${
              this.state.open ? "seller-menu-slide-in" : "seller-menu-slide-out"
            }`}
          >
            <div className="seller-menu-section">
              <div className="my-4 mx-3 hamburg">
                <HamburgerMenu
                  width={20}
                  height={15}
                  color="#f76b1a"
                  isOpen={true}
                  menuClicked={this.handleClick}
                  className="float-right "
                />
              </div>
              <h6>MY ACCOUNT</h6>
              <hr />
              <ul id="seller-account-links">
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    exact
                    to="/seller-dashboard"
                  >
                    <RiDashboardLine className="mr-2" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller-products"
                  >
                    <BsFillBagFill className="mr-2" />
                    Products
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller-orders"
                  >
                    <GoClippy className="mr-2" />
                    Orders
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller-review"
                  >
                    <MdRateReview className="mr-2" />
                    Reviews
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller/products/rejected"
                  >
                    <GiCancel className="mr-2" />
                    Rejects
                    <span
                      className="badge ml-2"
                      style={{ backgroundColor: "#f76b1a", color: "#fff" }}
                    >
                      1
                    </span>
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller/settings"
                  >
                    <GoSettings className="mr-2" />
                    Settings
                  </NavLink>
                </li>
              </ul>
              <h6>OTHERS</h6>
              <hr />
              <ul id="seller-others-links">
                <li className="my-4">
                  <Link className="link" to="/">
                    Buy
                  </Link>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller/sell"
                  >
                    Sell
                  </NavLink>
                </li>

                <li
                  style={{ cursor: "pointer" }}
                  className="my-4 link"
                  onClick={() => (window.location.href = "/api/logout")}
                >
                  Logout
                </li>
              </ul>
            </div>
            <div className="blank-menu-area" onClick={this.handleClick}></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SellerHamburgerMenu;
