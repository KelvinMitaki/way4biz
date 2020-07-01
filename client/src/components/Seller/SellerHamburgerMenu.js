import React from "react";
import HamburgerMenu from "react-hamburger-menu";

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

export default SellerHamburgerMenu;
