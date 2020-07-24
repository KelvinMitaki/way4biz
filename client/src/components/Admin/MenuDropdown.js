import React from "react";

import "./MenuDropdown.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

class MenuDropdown extends React.Component {
  componentDidMount() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  showSmMenuItemBadges(name, props) {
    if (name === "New Sellers") {
      if (props.newSellers > 0) {
        return <span className="ml-1">({props.newSellers})</span>;
      } else {
        return;
      }
    } else {
      return;
    }
  }
  render() {
    const { parentKey, childKeys } = this.props.data;
    return (
      <div>
        <span className="accordion">
          {parentKey[0]}
          {this.props.newSellers > 0 ? (
            <span className="ml-1">({this.props.newSellers})</span>
          ) : null}

          <MdKeyboardArrowDown className="ml-1" />
        </span>
        <div className="panel">
          {childKeys.map((childKey) => (
            <p key={Math.random()}>
              <NavLink
                activeClassName="admin-active-lg-link"
                to={childKey.url}
                style={{ width: "100%" }}
              >
                {childKey.name}
                {this.showSmMenuItemBadges(childKey.name, this.props)}
              </NavLink>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
