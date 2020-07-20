import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import { fetchUser, fetchProducts, fetchCategories } from "./redux/actions";
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
import Review from "./components/Seller/SellerDashBoardReviews";
import SellerProducts from "./components/Seller/SellerProducts";
import SellerDashBoardNewProduct from "./components/Seller/SellerDashBoardNewProduct";
import SellerDashBoardProductEdit from "./components/Seller/SellerDashBoardProductEdit";
import SellerOrderDetails from "./components/Seller/SellerOrderDetails";
import "react-responsive-tabs/styles.css";
import BuyerOrderDetails from "./components/Account/BuyerOrderDetails";
import ProductParent from "./components/Products/ProductParent";
import PendingReviews from "./components/Account/PendingReviews";
import ProductReviewsWrapper from "./components/Product/ProductReviewsWrapper";
import ParentProduct from "./components/Product/ParentProduct";
import AddReview from "./components/Account/AddReview";
import ScreenLoader from "./components/Pages/ScreenLoader";
import AdminDashBoardSellers from "./components/Admin/AdminDashBoardSellers";
import AdminDashBoardSeller from "./components/Admin/AdminDashBoardSeller";
import AdminDashBoardNewSellers from "./components/Admin/AdminDashBoardNewSellers";
// import ScrollToTop from "./ScrollToTop";

class App extends React.Component {
  componentDidMount() {
    const { fetchUser, fetchProducts, fetchCategories } = this.props;
    fetchUser();
    fetchProducts();
    fetchCategories();
  }
  render() {
    if (this.props.isSignedIn !== null) {
      return (
        <div id="main">
          <MobileLogo />
          {/* <ScrollToTop> */}
          <div>
            <Route path="/" exact component={Home} />
            <Route
              path="/product/main/reviews/:productId"
              exact
              component={ProductReviewsWrapper}
            />
            <Route path="/admin-sellers" component={AdminDashBoardSellers} />
            <Route path="/admin-seller" component={AdminDashBoardSeller} />
            <Route
              path="/admin-new-sellers"
              component={AdminDashBoardNewSellers}
            />
            <Route
              path="/products/category/:category"
              exact
              component={ProductParent}
            />
            <Route
              path="/order/details/:orderId"
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <SellerOrderDetails />
                ) : (
                  <Redirect to="/seller/sign-in" />
                )
              }
            />
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
                  <SellerDashBoardNewProduct />
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
            <Route
              path="/seller/edit/:productId"
              exact
              render={() =>
                this.props.user && this.props.user.verifiedPhoneNumber ? (
                  <SellerDashBoardProductEdit />
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
                  <Route
                    path="/product/:productId"
                    exact
                    component={ParentProduct}
                  />
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
                    path="/add/review/:productId/:orderId"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <AddReview />
                      )
                    }
                  />
                  <Route
                    path="/pending/reviews"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <PendingReviews />
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
                    path="/buyer/order/details/:orderId"
                    exact
                    render={() =>
                      this.props.isSignedIn === false ? (
                        <Redirect to="/sign-in" />
                      ) : (
                        <BuyerOrderDetails />
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
          {/* </ScrollToTop> */}
        </div>
      );
    }
    return <ScreenLoader />;
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchProducts,
  fetchCategories,
})(App);
