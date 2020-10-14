import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import {
  fetchUser,
  fetchProducts,
  fetchCategories,
  saveCartItems,
  saveWishlistItems,
  fetchCartItems,
  fetchWishlistProducts,
  fetchAllCategories,
  fetchHeroImages
} from "./redux/actions";
import "react-responsive-tabs/styles.css";
import MoveToTop from "./MoveToTop";
const Home = lazy(() => import("./components/Pages/Home"));
const Cart = lazy(() => import("./components/Pages/Cart"));
const Authenticate = lazy(() =>
  import("./components/Authenticate/Authenticate")
);
const AddressForm = lazy(() => import("./components/Checkout/AddressForm"));
const CheckOut = lazy(() => import("./components/Checkout/Checkout"));
const Account = lazy(() => import("./components/Account/Account"));
const ChangePassword = lazy(() =>
  import("./components/Account/changePassword")
);
const Orders = lazy(() => import("./components/Account/Orders"));
const Wishlist = lazy(() => import("./components/Account/Wishlist"));
const ForgotPassword = lazy(() =>
  import("./components/Authenticate/ForgotPassword")
);
// const MobileLogo=lazy(()=>import( "./components/Header/MobileLogo"));
const NotFound = lazy(() => import("./components/Pages/NotFound"));
const MainCategories = lazy(() =>
  import("./components/MainCategories/MainCategories")
);
const SellerDashBoard = lazy(() =>
  import("./components/Seller/SellerDashBoard")
);
const SellerRegister = lazy(() =>
  import("./components/Account/SellerRegister")
);
const SellerPhoneNumber = lazy(() =>
  import("./components/Account/SellerPhoneNumber")
);
const VerifySellerNumber = lazy(() =>
  import("./components/Account/VerifySellerNumber")
);
const SellerLogin = lazy(() => import("./components/Account/SellerLogin"));
const ResetPassword = lazy(() =>
  import("./components/Authenticate/ResetPassword")
);
const AdminDashBoard = lazy(() => import("./components/Admin/AdminDashBoard"));
const SellerOrders = lazy(() => import("./components/Seller/SellerOrders"));
const Review = lazy(() => import("./components/Seller/SellerDashBoardReviews"));
const SellerProducts = lazy(() => import("./components/Seller/SellerProducts"));
const SellerDashBoardNewProduct = lazy(() =>
  import("./components/Seller/SellerDashBoardNewProduct")
);
const SellerDashBoardProductEdit = lazy(() =>
  import("./components/Seller/SellerDashBoardProductEdit")
);
const SellerOrderDetails = lazy(() =>
  import("./components/Seller/SellerOrderDetails")
);
const BuyerOrderDetails = lazy(() =>
  import("./components/Account/BuyerOrderDetails")
);
const ProductParent = lazy(() => import("./components/Products/ProductParent"));
const PendingReviews = lazy(() =>
  import("./components/Account/PendingReviews")
);
const ProductReviewsWrapper = lazy(() =>
  import("./components/Product/ProductReviewsWrapper")
);
const ParentProduct = lazy(() => import("./components/Product/ParentProduct"));
const AddReview = lazy(() => import("./components/Account/AddReview"));
const ScreenLoader = lazy(() => import("./components/Pages/ScreenLoader"));
const AdminDashBoardSellers = lazy(() =>
  import("./components/Admin/AdminDashBoardSellers")
);
const AdminDashBoardSeller = lazy(() =>
  import("./components/Admin/AdminDashBoardSeller")
);
const AdminDashBoardNewSellers = lazy(() =>
  import("./components/Admin/AdminDashBoardNewSellers")
);
const AdminDashBoardNewSeller = lazy(() =>
  import("./components/Admin/AdminDashBoardNewSeller")
);
const SellerProfiling = lazy(() =>
  import("./components/Seller/SellerProfiling")
);
const AdminDashBoardOrders = lazy(() =>
  import("./components/Admin/AdminDashBoardOrders")
);
const AdminDashBoardOrder = lazy(() =>
  import("./components/Admin/AdminDashBoardOrder")
);
const AdminDashBoardCategories = lazy(() =>
  import("./components/Admin/AdminDashBoardCategories")
);
const AdminDashBoardAddCategory = lazy(() =>
  import("./components/Admin/AdminDashBoardAddCategory")
);
const AdminDashBoardEditCategory = lazy(() =>
  import("./components/Admin/AdminDashBoardEditCategory")
);
const AdminDashBoardOrderItems = lazy(() =>
  import("./components/Admin/AdminDashBoardOrderItems")
);
const Store = lazy(() => import("./components/Store/Store"));
const SearchResults = lazy(() => import("./components/Header/SearchResults"));
const AdminDashBoardNewProducts = lazy(() =>
  import("./components/Admin/AdminDashBoardNewProducts")
);
const AdminDashBoardNewProduct = lazy(() =>
  import("./components/Admin/AdminDashBoardNewProduct")
);
const AdminDashBoardNewProductReject = lazy(() =>
  import("./components/Admin/AdminDashBoardNewProductReject")
);
const SellerSettings = lazy(() => import("./components/Seller/SellerSettings"));
const SellerRejects = lazy(() => import("./components/Seller/SellerRejects"));
const AdminDashBoardComplaints = lazy(() =>
  import("./components/Admin/AdminDashBoardComplaints")
);
const AdminDashBoardComplaint = lazy(() =>
  import("./components/Admin/AdminDashBoardComplaint")
);
const AdminDashBoardRejects = lazy(() =>
  import("./components/Admin/AdminDashBoardRejects")
);
const FileComplain = lazy(() => import("./components/Account/FileComplain"));
const AccountComplaints = lazy(() =>
  import("./components/Account/AccountComplaints")
);
const AccountComplaint = lazy(() =>
  import("./components/Account/AccountComplaint")
);
const MpesaPayment = lazy(() => import("./components/Checkout/MpesaPayment"));
const OrderPaymentSuccess = lazy(() =>
  import("./components/Checkout/OrderPaymentSuccess")
);
const CardPayment = lazy(() => import("./components/CardPayment/CardPayment"));
const CardPaymentError = lazy(() =>
  import("./components/CardPayment/CardPaymentError")
);
const MpesaError = lazy(() => import("./components/Checkout/MpesaError"));
const NormalDelivery = lazy(() =>
  import("./components/Checkout/NormalDelivery")
);
const ExpressDelivery = lazy(() =>
  import("./components/Checkout/ExpressDelivery")
);
// const Logistics=lazy(()=>import( "./components/Pages/Logistics"));
const About = lazy(() => import("./components/Pages/HelpCenter/About"));
const TermsConditions = lazy(() =>
  import("./components/Pages/HelpCenter/TermsConditions")
);
const PrivacyPolicy = lazy(() =>
  import("./components/Pages/HelpCenter/PrivacyPolicy")
);
const Contact = lazy(() => import("./components/Pages/HelpCenter/Contact"));
const HowToSell = lazy(() => import("./components/Pages/HelpCenter/HowToSell"));
const SupportCenter = lazy(() =>
  import("./components/Pages/HelpCenter/SupportCenter")
);
const CustomerService = lazy(() =>
  import("./components/Pages/HelpCenter/CustomerService")
);
const HelpCenter = lazy(() =>
  import("./components/Pages/HelpCenter/HelpCenter")
);
const AdminDashBoardInbox = lazy(() =>
  import("./components/Admin/AdminDashBoardInbox")
);
const SellerPoints = lazy(() => import("./components/Seller/SellerPoints"));
const ContactSuccess = lazy(() =>
  import("./components/Pages/HelpCenter/ContactSuccess")
);
const AdminDashBoardRedeems = lazy(() =>
  import("./components/Admin/AdminDashBoardRedeems")
);
const ReturnPolicy = lazy(() =>
  import("./components/Pages/HelpCenter/ReturnPolicy")
);

class App extends React.Component {
  state = {
    scrolling: false
  };
  componentDidMount() {
    const {
      fetchUser,
      fetchProducts,
      fetchCategories,
      fetchAllCategories,
      fetchHeroImages
    } = this.props;
    fetchUser();
    fetchProducts();
    fetchCategories();
    fetchAllCategories();
    fetchHeroImages();
    window.addEventListener("scroll", this.handleScroll);
    this.scrolled = false;
    this.setState({
      scrolling: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.isSignedIn &&
      JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart)
    ) {
      this.props.cart.length !== 0 &&
        this.props.saveCartItems(
          this.props.cart.map(i => ({
            freeShipping: i.freeShipping,
            name: i.name,
            price: i.price,
            stockQuantity: i.stockQuantity,
            imageUrl: i.imageUrl,
            seller: { storeName: i.seller.storeName },
            _id: i._id,
            quantity: i.quantity
          }))
        );
    }
    if (
      this.props.isSignedIn &&
      JSON.stringify(prevProps.wishlist) !== JSON.stringify(this.props.wishlist)
    ) {
      this.props.wishlist.length !== 0 &&
        this.props.saveWishlistItems(
          this.props.wishlist.map(i => ({
            freeShipping: i.freeShipping,
            name: i.name,
            price: i.price,
            stockQuantity: i.stockQuantity,
            seller: { storeName: i.seller.storeName },
            imageUrl: i.imageUrl,
            _id: i._id
          }))
        );
    }

    if (prevState.scrolling !== this.state.scrolling) {
      this.scrolled = false;
    }
    let scrollTopDistance = window.pageYOffset;
    if (
      scrollTopDistance > 700 &&
      prevState.scrolling === false &&
      prevState.scrolling !== this.state.scrolling
    ) {
      this.setState({
        scrolling: true
      });

      this.scrolled = true;
    }

    if (
      prevState.scrolling &&
      prevState.scrolling !== this.state.scrolling &&
      scrollTopDistance > 700
    ) {
      this.setState({
        scrolling: false
      });
      this.scrolled = false;
    }
  }

  handleScroll = e => {
    let scrollTopDistance = window.pageYOffset;
    if (scrollTopDistance > 700) {
      this.setState({
        scrolling: true
      });

      this.scrolled = true;
    } else {
      this.setState({
        scrolling: false
      });
      this.scrolled = false;
    }
  };

  render() {
    if (
      window.location.protocol !== "https:" &&
      process.env.NODE_ENV === "production"
    ) {
      window.location.replace(
        `https:${window.location.href.substring(
          window.location.protocol.length
        )}`
      );
    }

    if (this.props.isSignedIn !== null) {
      return (
        <div id="main">
          {this.scrolled && this.state.scrolling ? <MoveToTop /> : null}
          {/* <MobileLogo /> */}

          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" component={About} />
              <Route path="/terms" component={TermsConditions} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/how-to-sell" component={HowToSell} />
              <Route path="/support-center" component={SupportCenter} />
              <Route path="/customer-service" component={CustomerService} />
              <Route path="/normal-delivery" component={NormalDelivery} />
              <Route path="/express-delivery" component={ExpressDelivery} />
              {/* <Route path="/logistics" component={Logistics} /> */}
              <Route path="/return-policy" component={ReturnPolicy} />
              <Route path="/help-center" component={HelpCenter} />
              <Route
                path="/product/main/reviews/:productId"
                exact
                component={ProductReviewsWrapper}
              />
              <Route
                path="/contact-us"
                render={() =>
                  this.props.isSignedIn ? (
                    <Contact />
                  ) : (
                    <Redirect to="/sign-in" />
                  )
                }
              />
              <Route
                path="/contact-success"
                render={() =>
                  this.props.isSignedIn ? (
                    <ContactSuccess />
                  ) : (
                    <Redirect to="/sign-in" />
                  )
                }
              />
              <Route
                path="/seller/profiling"
                exact
                render={() =>
                  this.props.user &&
                  this.props.user.verifiedPhoneNumber &&
                  !this.props.user.isSeller ? (
                    <SellerProfiling />
                  ) : (
                    <Redirect to="/seller-dashboard" />
                  )
                }
              />
              <Route path="/seller/store/:sellerId" exact component={Store} />
              <Route path="/search/results" component={SearchResults} />
              <Route
                path="/admin-sellers"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardSellers />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/complaints"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardComplaints />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/complaint/:complaintId"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardComplaint />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/rejects"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardRejects />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-redeems"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardRedeems />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-orders"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardOrders />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-order/:orderId"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardOrder />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-categories"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardCategories />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/root/admin-order/view-items/:orderId"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardOrderItems />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/new-products"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardNewProducts />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/new-product/:productId"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardNewProduct />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-inbox"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardInbox />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin/root/new-product/why-reject/:productId"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardNewProductReject />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-category/add"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardAddCategory />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-category/edit/:categoryId"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardEditCategory />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-seller/:sellerId"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardSeller />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-new-sellers"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardNewSellers />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
              />
              <Route
                path="/admin-new-seller/:sellerId"
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoardNewSeller />
                  ) : (
                    <Redirect to="/seller/sign-in" />
                  )
                }
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
                path="/points"
                render={() =>
                  this.props.user && this.props.user.verifiedPhoneNumber ? (
                    <SellerPoints />
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
                path="/seller/settings"
                exact
                render={() =>
                  this.props.user ? (
                    <SellerSettings />
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
                path="/seller/products/rejected"
                exact
                render={() =>
                  this.props.user && this.props.user.verifiedPhoneNumber ? (
                    <SellerRejects />
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
              <Route
                path="/admin-dashboard"
                exact
                render={() =>
                  this.props.user && this.props.user.isAdmin ? (
                    <AdminDashBoard />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />

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
                path="/seller/register/referral/:referralCode"
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
                  this.props.isSignedIn ? <Redirect to="/" /> : <SellerLogin />
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
                path="/buyer/file-complain/:orderId/:productId"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <FileComplain />
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
                path="/products/search/:searchTerm"
                exact
                component={SearchResults}
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
                path="/mpesa-payment"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <MpesaPayment />
                  )
                }
              />
              <Route
                path="/order/success"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <OrderPaymentSuccess />
                  )
                }
              />
              {/* <Route
                path="/card-payment"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <CardPayment />
                  )
                }
              /> */}
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
              <Route
                path="/complaints"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <AccountComplaints />
                  )
                }
              />
              <Route
                path="/complaint/:complaintId"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <AccountComplaint />
                  )
                }
              />
              <Route
                path="/card/payment"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <CardPayment />
                  )
                }
              />
              <Route
                path="/wishlist"
                exact
                render={() =>
                  this.props.isSignedIn === false ? (
                    <Redirect to="/sign-in" />
                  ) : (
                    <Wishlist />
                  )
                }
              />
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
              <Route
                path="/sign-in"
                exact
                render={() =>
                  this.props.isSignedIn ? <Redirect to="/" /> : <Authenticate />
                }
              />
              <Route
                path="/mpesa/error"
                exact
                render={() =>
                  this.props.isSignedIn ? <MpesaError /> : <Redirect to="/" />
                }
              />
              <Route
                path="/card/error"
                exact
                render={() =>
                  this.props.isSignedIn ? (
                    <CardPaymentError />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      );
    }
    return <ScreenLoader />;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user,
    loading: state.auth.loading,
    cart: state.cartReducer.cart,
    wishlist: state.cartReducer.wishlist
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchProducts,
  fetchCategories,
  saveCartItems,
  fetchAllCategories,
  fetchCartItems,
  fetchWishlistProducts,
  saveWishlistItems,
  fetchHeroImages
})(App);
