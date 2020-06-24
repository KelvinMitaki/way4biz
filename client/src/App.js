import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Authenticate from "./components/Authenticate/Authenticate";
import AddressForm from "./components/Checkout/AddressForm";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        {!this.props.isSignedIn ? (
          <Route path="/sign-in" exact component={Authenticate} />
        ) : (
          <Route
            render={() => (
              <React.Fragment>
                <div className="content">
                  <Header />
                  <Switch>
                    <Route
                      path="/"
                      exact
                      component={Home}
                      isSignedIn={this.props.isSignedIn}
                    />
                    <Route path="/product" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/address" exact component={AddressForm} />
                  </Switch>
                </div>
                <Footer />
                <MiniMenuWrapper />
              </React.Fragment>
            )}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(App);
