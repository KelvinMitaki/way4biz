import React from "react";

import "./SellerProducts.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { fetchSellerProducts } from "../../redux/actions";
import { connect } from "react-redux";

class SellerProcucts extends React.Component {
  componentDidMount() {
    this.props.fetchSellerProducts();
  }
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-md-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-md-9">
            <div className="product-content"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerProcucts: state.seller.sellerProcucts
  };
};
export default connect(mapStateToProps, { fetchSellerProducts })(
  SellerProcucts
);
