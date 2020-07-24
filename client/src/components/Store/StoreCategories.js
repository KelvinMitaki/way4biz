import React from "react";
import { IconContext } from "react-icons";

import "./StoreCategories.css";
import { RiArrowDropRightLine } from "react-icons/ri";

class StoreCategories extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3 className="category-head">Store Categories</h3>
          <ul className="categories">
            <li>
              Electronics
              <IconContext.Provider value={{ className: "right-arrow" }}>
                <RiArrowDropRightLine />
              </IconContext.Provider>
            </li>
            <li>
              Electronics
              <IconContext.Provider value={{ className: "right-arrow" }}>
                <RiArrowDropRightLine />
              </IconContext.Provider>
            </li>
            <li>
              Electronics
              <IconContext.Provider value={{ className: "right-arrow" }}>
                <RiArrowDropRightLine />
              </IconContext.Provider>
            </li>
            <li>
              Electronics
              <IconContext.Provider value={{ className: "right-arrow" }}>
                <RiArrowDropRightLine />
              </IconContext.Provider>
            </li>
            <li>
              Electronics
              <IconContext.Provider value={{ className: "right-arrow" }}>
                <RiArrowDropRightLine />
              </IconContext.Provider>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StoreCategories;
