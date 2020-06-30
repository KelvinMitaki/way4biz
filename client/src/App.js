import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Product from "./components/Product/Product";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Authenticate from "./components/Authenticate/Authenticate";
import AddressForm from "./components/Checkout/AddressForm";
import CheckOut from "./components/Checkout/Checkout";
import { connect } from "react-redux";
import "./App.css";
import Account from "./components/Account/Account";
import ChangePassword from "./components/Account/changePassword";
import Orders from "./components/Account/Orders";
import Wishlist from "./components/Account/Wishlist";
import { fetchUser } from "./redux/actions";
import ForgotPassword from "./components/Authenticate/ForgotPassword";
import MobileLogo from "./components/Header/MobileLogo";
import NotFound from "./components/Pages/NotFound";
import MainCategories from "./components/MainCategories/MainCategories";
import SellerRegister from "./components/Account/SellerRegister";

class App extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }
  render() {
    if (this.props.isSignedIn !== null) {
      return (
        <div id="main">
          <MobileLogo />
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route
              render={() => (
                <Switch>
                  <Route
                    path="/password/reset"
                    exact
                    render={() =>
                      this.props.isSignedIn === true ? (
                        <Redirect to="/" />
                      ) : (
                        <ForgotPassword />
                      )
                    }
                  />
                  <Route path="/product" exact component={Product} />
                  <Route path="/categories" exact component={MainCategories} />
                  <Route path="/cart" exact component={Cart} />
                  <Route
                    path="/seller/register"
                    exact
                    render={() =>
                      this.props.isSignedIn ? (
                        <Redirect to="/" />
                      ) : (
                        <SellerRegister />
                      )
                    }
                  />
                  <Route
                    path="/address"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <AddressForm />
                      )
                    }
                  />
                  <Route
                    path="/checkout"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <CheckOut />
                      )
                    }
                  />
                  <Route
                    path="/account"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <Account />
                      )
                    }
                  />
                  <Route
                    path="/orders"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <Orders />
                      )
                    }
                  />
                  <Route path="/wishlist" exact component={Wishlist} />
                  <Route
                    path="/change-password"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <ChangePassword />
                      )
                    }
                  />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              )}
            />
          </div>
          <Route
            path="/sign-in"
            exact
            render={() =>
              this.props.isSignedIn ? <Redirect to="/" /> : <Authenticate />
            }
          />
        </div>
      );
    }
    return null;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
