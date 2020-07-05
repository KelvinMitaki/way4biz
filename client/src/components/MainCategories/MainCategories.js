import React from "react";

import "./MainCategories.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper.js";
import "./MainCategories.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { singleCategory } from "../../redux/actions/index.js";

class MainCategories extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <div id="all-categories-wrapper">
            <div className="container">
              <div className="row">
                <div className="col my-3">
                  <h3>All Categories</h3>
                </div>
              </div>
            </div>
            <div className="container categories-section box-container">
              {this.props.categories.length !== 0 &&
                this.props.categories.map(category => (
                  <Link
                    key={category._id}
                    to={`/products/category/${category._id}`}
                    className="individual-category"
                    onClick={() =>
                      this.props.singleCategory(
                        category._id,
                        this.props.history
                      )
                    }
                  >
                    <div>{category._id}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.product.categories
  };
};
export default withRouter(
  connect(mapStateToProps, { singleCategory })(MainCategories)
);
