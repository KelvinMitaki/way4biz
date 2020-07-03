import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";

import "./HeaderWishList.css";

class HeaderWishList extends React.Component {
  render() {
    return (
      <Link to="/wishlist" className="secondary-link">
        {/* <div className="icon flaticon-heart header-wishlist-icon"> */}
        <IconContext.Provider
          value={{ className: "icon header-wishlist-icon" }}
        >
          <div className="icon-container">
            <AiOutlineHeart />
            <span className="badge">0</span>
          </div>
        </IconContext.Provider>
        {/* <span className="badge">0</span> */}
        {/* </div> */}
      </Link>
    );
  }
}

export default HeaderWishList;
