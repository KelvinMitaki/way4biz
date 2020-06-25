import React from "react";

import "./Authenticate.css";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInOpen: true
    };

    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleSignInClick(e) {
    this.setState(prevState => {
      if (!prevState.signInOpen) {
        return {
          signInOpen: true
        };
      }
      return {
        signInOpen: prevState.signInOpen
      };
    });
  }

  handleRegisterClick(e) {
    this.setState(prevState => {
      if (prevState.signInOpen) {
        return {
          signInOpen: false
        };
      }
      return {
        signInOpen: prevState.signInOpen
      };
    });
  }

  render() {
    return (
      <div id="auth-section">
        <AuthHeader />
        <div className="container-fluid my-5 auth-forms">
          <div className="row">
            <div className="col" id="auth-navigator">
              <div>
                <p onClick={this.handleSignInClick} className="mr-4">
                  {this.state.signInOpen ? (
                    <span style={{ color: "#f76b1a" }}> Sign in</span>
                  ) : (
                    <span> Sign in</span>
                  )}
                </p>
              </div>
              |
              <div>
                <p onClick={this.handleRegisterClick} className="ml-4">
                  {!this.state.signInOpen ? (
                    <span style={{ color: "#f76b1a" }}> Register</span>
                  ) : (
                    <span> Register</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {this.state.signInOpen ? (
                <LoginForm />
              ) : (
                <RegisterForm handleSignInClick={this.handleSignInClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Authenticate;
