import React from "react";

import "./HelpCenterHeader.css";
import Logo from "../../Header/Logo";
import { NavLink } from "react-router-dom";

class HelpCenterHeader extends React.Component {
  render() {
    return (
      <div id="help-center-header" className="primary-background">
        <Logo id="help-center-header-logo" />
        <ul className="helper-center-menu-items">
          <li>
            <NavLink to="/" activeClassName="help-center-active">
              <p>Hellooo</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="help-center-active">
              <p>Hellooo</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="help-center-active">
              <p>Hellooo</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="help-center-active">
              <p>Hellooo</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="help-center-active">
              <p>Hellooo</p>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default HelpCenterHeader;
