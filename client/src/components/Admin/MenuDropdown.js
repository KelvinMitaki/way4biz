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
  render() {
    const { parentKey, childKeys } = this.props.data;
    // console.log(childKeys);
    return (
      <div>
        <span className="accordion">
          {parentKey[0]}
          <span className="badge custom-badge ml-1">{parentKey[1]}</span>
          <MdKeyboardArrowDown className="ml-1" />
        </span>
        <div className="panel">
          {childKeys.map((childKey) => (
            <p key={Math.random()}>
              <NavLink to={childKey.url} style={{ width: "100%" }}>
                {childKey.name}
                {childKey.num > 0 ? (
                  <span className="bagde custom-badge ml-1">
                    {childKey.num}
                  </span>
                ) : null}
              </NavLink>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
