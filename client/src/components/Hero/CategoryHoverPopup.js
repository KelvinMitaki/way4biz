import React from "react";

import "./CategoryHoverPopup.css";
import { Link } from "react-router-dom";

class CategoryHoverPopup extends React.Component {
  render() {
    return (
      <div className="category-hover-popup">
        <div className="hovered-sub-categories-section-wrapper">
          {/* mapping here */}
          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>
          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>
          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>

          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>
          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>
          <div className="hovered-sub-categories-section">
            <h5 className="sub-category-title">Helloo World</h5>
            <ul>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
              <li>
                <Link to="/">Test</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryHoverPopup;
