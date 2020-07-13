import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineBars } from "react-icons/ai";

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
                  <Link to="/">
                    <div className="random-category-icon">
                      <IconContext.Provider
                        value={{ className: "random-category-inner-icon" }}
                      >
                        <AiOutlineBars />
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
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>Watches & Jewelry</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>Toys,Kids & Babies</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>Automobiles & Motorcycles</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container row-2">
            <div className="row no-gutters">
              <div className="col-3">
                <div className="random-category-container">
                  <Link to="/">
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
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>All Categories</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>All Categories</small>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="random-category-container">
                  <div className="random-category-icon">
                    <IconContext.Provider
                      value={{ className: "random-category-inner-icon" }}
                    >
                      <AiOutlineBars />
                    </IconContext.Provider>
                  </div>
                  <div className="random-category-text">
                    <small>All Categories</small>
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
