import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./AdminDashboardSecondaryHeader.css";
import ProfileImage from "../Header/ProfileImage";
import { RiDashboardLine, RiFileUserLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { GoClippy } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import MenuDropdown from "./MenuDropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import { connect } from "react-redux";
import { fetchNewSellers } from "../../redux/actions";
import ScreenLoader from "../Pages/ScreenLoader";

class AdminDashboardSecondaryHeader extends React.Component {
  state = {
    open: false,
    keys: [
      {
        parentKey: ["Sellers", 100],
        childKeys: [
          { name: "Active Sellers", url: "/admin-sellers" },
          { name: "New Sellers", url: "/admin-new-sellers", num: "100" }
        ]
      }
    ]
  };
  handleClick = e => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  };
  render() {
    return (
      <div className="container-fluid admin-secondary-dashboard-header">
        {this.state.open ? (
          <div
            onClick={this.handleClick}
            className="back-shed"
            style={{ backgroundColor: "transparent" }}
          ></div>
        ) : null}
        <div className="admin-hamburger-menu-wrapper">
          <div className="admin-hamburger-menu">
            {this.state.open ? (
              <HamburgerMenu
                width={30}
                height={20}
                color="#f76b1a"
                isOpen={true}
                menuClicked={this.handleClick}
              />
            ) : (
              <HamburgerMenu
                width={30}
                height={20}
                color="#f76b1a"
                isOpen={false}
                menuClicked={this.handleClick}
              />
            )}
          </div>
          {this.state.open ? (
            <div className="admin-dashboard-sm-menu">
              <p>
                <Link to="/admin-dashboard">Dashboard</Link>
              </p>
              <MenuDropdown data={this.state.keys[0]} />
              <p>
                <Link to="/orders">Orders</Link>
              </p>
              <p>
                <Link to="/admin-dashboard">Categories</Link>
              </p>
            </div>
          ) : null}
        </div>
        <ul className="admin-dashboard-menu-lg-items">
          <li>
            <NavLink
              to="/admin-dashboard"
              activeClassName="admin-active-lg-link"
              exact
            >
              <RiDashboardLine /> <span className="ml-2">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <a href="/" className="admin-menu-dropdown-main">
              <RiFileUserLine /> <span className="ml-2">Sellers</span>
              <span className="ml-1">
                <MdKeyboardArrowDown />
                {this.props.newSellers &&
                  this.props.newSellers.sellers &&
                  this.props.newSellers.sellers.length.toLocaleString() !==
                    0 && (
                    <span className="badge custom-badge ml-2">
                      {this.props.newSellers.sellers.length.toLocaleString()}
                    </span>
                  )}
              </span>
            </a>

            <div className="sellers-dropdown">
              <p>
                <NavLink to="/admin-sellers">Active Sellers</NavLink>
              </p>
              <p>
                <NavLink to="/admin-new-sellers">
                  New Sellers
                  {this.props.newSellers &&
                    this.props.newSellers.sellers &&
                    this.props.newSellers.sellers.length !== 0 && (
                      <span className="badge custom-badge ml-2">
                        {this.props.newSellers.sellers.length}
                      </span>
                    )}
                </NavLink>
              </p>
            </div>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <GoClippy /> <span className="ml-2">Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="admin-active-lg-link">
              <IoIosAddCircleOutline /> <span className="ml-2">Categories</span>
            </NavLink>
          </li>
        </ul>
        <ProfileImage />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newSellers: state.sellerRegister.newSellers
  };
};
export default connect(mapStateToProps)(AdminDashboardSecondaryHeader);
