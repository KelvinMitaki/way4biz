import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineUser } from "react-icons/ai";

import "./User.css";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    return (
      <div id="user-auth" style={{ cursor: "pointer" }}>
        {/* <div className="icon user-icon flaticon-user secondary-link"> */}
        <IconContext.Provider value={{ className: "icon user-icon" }}>
          <div className="icon-container">
            <AiOutlineUser />
            <span>
              {this.props.user ? (
                <span style={{ color: "#f76b1a" }}>
                  Hello, {this.props.user.firstName}{" "}
                </span>
              ) : (
                <span
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#f76b1a"
                  }}
                >
                  Sign In | Join
                </span>
              )}
            </span>
          </div>
        </IconContext.Provider>

        {/* </div> */}
        <div id="auth-info">
          {this.props.user ? (
            <div className="my-account mt-4">
              <NavLink
                activeClassName="active"
                to="/account"
                className="primary-link my-account-link"
              >
                My Account
              </NavLink>
              <NavLink to="/orders" className="primary-link my-account-link">
                Orders
              </NavLink>
              <NavLink to="/wishlist" className="primary-link my-account-link">
                WishList
              </NavLink>
              {this.props.user.storeName && (
                <NavLink
                  to="/seller-dashboard"
                  className="primary-link my-account-link"
                >
                  My Store
                </NavLink>
              )}

              <a className="logout-link" href="/api/logout">
                Logout
              </a>
            </div>
          ) : (
            <React.Fragment>
              <p>Welcome</p>
              <Link to="/sign-in" className="btn btn-md login">
                Sign In
              </Link>
              <hr style={{ backgroundColor: "#eee" }} />
              <p>Sign in with:</p>
              <div className="auth-btns">
                <a href="/auth/google" className="btn btn-md google">
                  Google
                </a>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(User);
