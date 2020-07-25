import React from "react";

import "./HeroCategories.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { singleCategory, fetchAllCategories } from "../../redux/actions";
import { IconContext } from "react-icons";
import { AiOutlineBars } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";

class HeroCategories extends React.Component {
  handleMouseOver = (e) => {
    setTimeout(() => this.props.handleSubCategoryPopup(), 1000);
  };
  handleMouseOut = (e) => {
    this.props.unHandleSubCategoryPopup();
  };

  render() {
    return (
      <div id={this.props.id}>
        <div className="category-head">
          <h3>Categories</h3>
        </div>
        <ul className="categories">
          <li
            onMouseEnter={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <Link
              to="/categories"
              onClick={() => this.props.fetchAllCategories()}
              style={{ color: "#000" }}
            >
              <AiOutlineBars />
              <span className="ml-2">All Categories</span>
            </Link>
            <IconContext.Provider value={{ className: "right-arrow" }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </li>
          {this.props.categories.length !== 0 &&
            this.props.categories.map((category) => (
              <li
                key={category._id}
                onClick={() =>
                  this.props.history.push(`/products/category/${category._id}`)
                }
                onMouseEnter={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                <div>
                  <AiOutlineBars />
                  <span className="ml-2">{category._id}</span>
                </div>
                <IconContext.Provider value={{ className: "right-arrow" }}>
                  <RiArrowDropRightLine />
                </IconContext.Provider>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.product.categories,
    filter: state.filter,
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory, fetchAllCategories })(
    HeroCategories
  )
);
