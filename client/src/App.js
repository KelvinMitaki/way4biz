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
import SellerDashBoard from "./components/Seller/SellerDashBoard";
import SellerRegister from "./components/Account/SellerRegister";
import SellerPhoneNumber from "./components/Account/SellerPhoneNumber";
import VerifySellerNumber from "./components/Account/VerifySellerNumber";
import SellerLogin from "./components/Account/SellerLogin";
import ResetPassword from "./components/Authenticate/ResetPassword";
import AdminDashBoard from "./components/Admin/AdminDashBoard";
import SellerOrders from "./components/Seller/SellerOrders";
import Review from "./components/Seller/Review";
import SellerProducts from "./components/Seller/SellerProducts";
import Sell from "./components/Seller/Sell";

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
              path="/seller-dashboard"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <SellerDashBoard />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
            <Route
              path="/seller-orders"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <SellerOrders />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
            <Route
              path="/seller/sell"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <Sell />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
            <Route
              path="/seller-review"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <Review />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
            <Route
              path="/seller-products"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <SellerProducts />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
            <Route path="/admin-dashboard" exact component={AdminDashBoard} />
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
                    path="/confirm/phoneNumber"
                    exact
                    render={() =>
                      this.props.isSignedIn ? (
                        <Redirect to="/" />
                      ) : (
                        <SellerPhoneNumber />
                      )
                    }
                  />
                  <Route
                    path="/number/verify"
                    exact
                    render={() =>
                      this.props.isSignedIn ? (
                        <Redirect to="/" />
                      ) : (
                        <VerifySellerNumber />
                      )
                    }
                  />
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
                    path="/seller/sign-in"
                    exact
                    render={() =>
                      this.props.isSignedIn ? (
                        <Redirect to="/" />
                      ) : (
                        <SellerLogin />
                      )
                    }
                  />
                  <Route
                    path="/password/reset/callback"
                    exact
                    render={() =>
                      this.props.isSignedIn ? (
                        <Redirect to="/" />
                      ) : (
                        <ResetPassword />
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
    user: state.auth.user,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
