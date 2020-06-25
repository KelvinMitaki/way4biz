import React from "react";
import { Link } from "react-router-dom";

import "./User.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
        <div className="icon user-icon flaticon-user">
          <span>Sign In | Join</span>
        </div>
        {this.state.open ? (
          <div id="auth-info">
            <p>Welcome</p>
            <Link to="/sign-in" className="btn btn-md login">
              Sign In
            </Link>
            <p>Sign in with:</p>
            <div className="auth-btns">
              <Link to="/" className="btn btn-md google">
                Google
              </Link>
            </div>

            {/* <hr /> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default User;
