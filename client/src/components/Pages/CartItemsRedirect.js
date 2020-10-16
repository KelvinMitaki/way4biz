import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { connect } from "react-redux";
import "./CartItemsRedirect.css";
import MobileLogo from "../Header/MobileLogo";
import { Link } from "react-router-dom";

class CartItemsRedirect extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <MobileLogo />
          <Header />
          <div className="container">
            <p>
              It appears your greed won't work here! The following items stock
              quantity is less than what you are requesting. Please make the
              corrections"
            </p>
            <div>
              {/* mapping here */}
              <div className="row">
                <div className="col-6">
                  <img src="/1.jpg" height="90px" />
                </div>
                <div className="col-6">
                  <h3>Great Beer</h3>
                  <p>20 in stock</p>
                  <p>
                    Change <Link to="/">here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(CartItemsRedirect);
