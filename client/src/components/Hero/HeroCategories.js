import React from "react";

import "./HeroCategories.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { singleCategory, fetchAllCategories } from "../../redux/actions";
import { IconContext } from "react-icons";
import { AiOutlineBars } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import CategoryHoverPopup from "./CategoryHoverPopup";

class HeroCategories extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="category-head">
          <h3>Categories</h3>
        </div>
        <ul className="categories">
          <li>
            <Link
              to="/categories"
              onClick={() => this.props.fetchAllCategories()}
            >
              <AiOutlineBars />
              <span className="ml-2">All Categories</span>
            </Link>
            <IconContext.Provider value={{ className: "right-arrow" }}>
              <RiArrowDropRightLine />
            </IconContext.Provider>
          </li>
          {this.props.categories.length !== 0 &&
            this.props.categories.map(category => (
              <li
                key={category._id}
                onClick={() =>
                  this.props.history.push(`/products/category/${category._id}`)
                }
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
const mapStateToProps = state => {
  return {
    categories: state.product.categories,
    filter: state.filter
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory, fetchAllCategories })(
    HeroCategories
  )
);
