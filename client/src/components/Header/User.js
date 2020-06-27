import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./User.css";
import { connect } from "react-redux";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(e) {
    this.setState((prevState, props) => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <div
        id="user-auth"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseEnter}
      >
        <div
          style={{ cursor: "pointer" }}
          className="icon user-icon flaticon-user secondary-link"
        >
          {this.props.user ? (
            <span>Hello, {this.props.user.firstName} </span>
          ) : (
            <span>Sign In | Join</span>
          )}
        </div>
        {this.state.open ? (
          <div id="auth-info">
            {this.props.user ? (
              <div className="my-account mt-4">
                <NavLink to="/account" className="link my-account-link">
                  My Account
                </NavLink>
                <NavLink to="/orders" className="link my-account-link">
                  Orders
                </NavLink>
                <NavLink to="/wishlist" className="link my-account-link">
                  WishList
                </NavLink>

                <a href="/api/logout">Logout</a>
              </div>
            ) : (
              <React.Fragment>
                <p>Welcome</p>
                <Link to="/sign-in" className="btn btn-md login">
                  Sign In
                </Link>
                <hr />
                <p>Sign in with:</p>
                <div className="auth-btns">
                  <a href="/auth/google" className="btn btn-md google">
                    Google
                  </a>
                </div>
              </React.Fragment>
            )}
          </div>
        ) : null}
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
