import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineBars } from "react-icons/ai";
import { FaTshirt, FaBaby, FaUtensils } from "react-icons/fa";
import { GiLargeDress, GiWatch } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";

import "./RandomCategories.css";
import { Link } from "react-router-dom";

class RandomCategories extends React.Component {
  render() {
    return (
      <div className="md-screen-random-categories">
        <div id="random-categories-wrapper">
          <div className="container row-1">
            <div className="row no-gutters">
              {/* mapping here */}
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/categories">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <AiOutlineBars />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>All Categories</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/clothes">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <FaTshirt />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Men's Clothing</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/clothes">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <GiLargeDress />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Women's Clothing</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/toys">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <FaBaby />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Toys and Babies</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container row-2">
            <div className="row no-gutters">
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/electronics">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <RiComputerLine />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Electronics and Computers</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/gadgets">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <BsPhone />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Phones and Accessories</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/utensils">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <FaUtensils />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Kitchen and Utensils</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/products/category/jewelry">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <GiWatch />
                      </IconContext.Provider>
                    </div>
                  </Link>
                  <div className="random-category-text">
                    <small>Jewelry and Watches</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomCategories;
