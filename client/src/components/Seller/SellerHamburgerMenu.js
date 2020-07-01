import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

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
          // <div className="seller-menu-section-wrapper">
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
                  className="float-right"
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
                    Dashboard
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller-products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    to="/seller-orders"
                  >
                    Orders
                  </NavLink>
                </li>
              </ul>
              <h6>OTHERS</h6>
              <hr />
              <ul id="seller-others-links">
                <li className="my-4">
                  <NavLink
                    className="link"
                    activeClassName="seller-menu-acive"
                    exact
                    to="/"
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
                    Say
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
                  <a className="link" href="/api/logout">
                    Logout
                  </a>
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
