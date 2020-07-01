import React from "react";
import HamburgerMenu from "react-hamburger-menu";

import "./AdminHamburgerMenu.css";

class AdminHamburgerMenu extends React.Component {
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
          className="admin-hamburger"
        />
        {this.state.open ? (
          // <div className="seller-menu-section-wrapper">
          <div
            className={`admin-menu-section-wrapper ${
              this.state.open ? "admin-menu-slide-in" : "admin-menu-slide-out"
            }`}
          >
            <div className="admin-menu-section">
              <div className="my-4 mx-3">
                <HamburgerMenu
                  width={20}
                  height={15}
                  color="#f76b1a"
                  isOpen={true}
                  menuClicked={this.handleClick}
                  className="float-right"
                />
              </div>
              <p style={{ color: "#fff" }}> Hey</p>
              <p style={{ color: "#fff" }}> Hey</p>
              <p style={{ color: "#fff" }}> Hey</p>
              <p style={{ color: "#fff" }}> Hey</p>
            </div>
            <div className="blank-menu-area" onClick={this.handleClick}></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AdminHamburgerMenu;
