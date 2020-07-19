import React from "react";

import "./MenuDropdown.css";

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
    return (
      <div>
        <button className="accordion">Section 1</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
