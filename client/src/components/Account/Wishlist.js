import React, { Component } from "react";
import AccountMenu from "./AccountMenu";
import { IconContext } from "react-icons";
import { BsHeartFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import "./WishList.css";
import AccountHeader from "../Header/AccountHeader";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeFromWishlist } from "../../redux/actions";

export class Wishlist extends Component {
  render() {
    return (
      <React.Fragment>
        <AccountHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AccountMenu />
            </div>
            <div className="col-lg-8 box-container wishlist">
              <h4 style={{ textAlign: "center" }}>Saved Items</h4>
              {/* show this component if wishlist is empty */}
              {this.props.wishlist.length === 0 && (
                <React.Fragment>
                  <div className="container-fluid wishlist-no-saved-items">
                    <IconContext.Provider
                      value={{ className: "wishlist-large-icon" }}
                    >
                      <BsHeartFill />
                    </IconContext.Provider>
                    <h6>You haven’t saved an item yet!</h6>
                    <p id="wishlist-dummy-text">
                      Found something you like? Tap on the heart shaped icon
                      below the item to add it to your wishlist! All your saved
                      items will appear here.
                    </p>
                    <Link to="/" className="btn btn-lg wishlist-button mt-4">
                      Continue Shopping
                    </Link>
                  </div>
                </React.Fragment>
              )}
              {/* show this otherwise */}
              <div className="container-fluid wishlist-saved-items">
                {/* mapping here */}
                {this.props.wishlist.length !== 0 &&
                  this.props.wishlist.map(item => (
                    <div
                      className="wishlist-product-wrapper box-container"
                      key={item._id}
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-7 wishlist-item-image">
                          <div className="row align-items-center">
                            <div className="image col-md-4 p-0">
                              <img src={item.imageUrl} alt={item.name} />
                            </div>
                            <div className="col-md-8">
                              <h4 id="wishlist-product-name" className="my-3">
                                {item.name}
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 wishlist-more-info">
                          <div className="row">
                            <div className="col-6">
                              <Link
                                id="order-today-link"
                                to="/cart"
                                onClick={() => this.props.addToCart(item)}
                              >
                                Order Today
                              </Link>
                            </div>
                            <div
                              id="remove-wishlist"
                              className="col-6"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                this.props.removeFromWishlist(item)
                              }
                            >
                              <IconContext.Provider
                                value={{ className: "helloo" }}
                              >
                                <FaTrashAlt />
                                <span className="ml-2">Remove</span>
                              </IconContext.Provider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    wishlist: state.cartReducer.wishlist
  };
};
export default connect(mapStateToProps, { addToCart, removeFromWishlist })(
  Wishlist
);
