import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Authenticate from "./components/Authenticate/Authenticate";
import AddressForm from "./components/Checkout/AddressForm";
import CheckOut from "./components/Checkout/Checkout";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Route path="/sign-in" exact component={Authenticate} />
        {!this.props.isSignedIn && <Redirect to="/sign-in" />};
        {this.props.isSignedIn && (
          <Route
            render={() => (
              <React.Fragment>
                <div className="content">
                  <Header />
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/address" exact component={AddressForm} />
                    <Route path="/checkout" exact component={CheckOut} />
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
