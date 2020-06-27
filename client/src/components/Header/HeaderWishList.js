import React from "react";
import { Link } from "react-router-dom";

import "./HeaderWishList.css";

class HeaderWishList extends React.Component {
  render() {
    return (
      <Link to="/wishlist" className="secondary-link">
        <div className="icon flaticon-heart header-wishlist-icon">
          <span className="badge">0</span>
        </div>
      </Link>
    );
  }
}

export default HeaderWishList;
