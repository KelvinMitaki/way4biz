import React from "react";
import Tabs from "react-responsive-tabs";

import "./SellerProducts.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { fetchSellerProducts } from "../../redux/actions";
import DashBoardProduct from "./DashBoardProduct";
import { connect } from "react-redux";

class SellerProducts extends React.Component {
  state = {};
  componentDidMount() {
    this.props.fetchSellerProducts();
  }

  getTabs() {
    let tabs = [
      {
        title: "Total Products",
        data: (
          <DashBoardProduct
            products={this.props.sellerProducts}
            category="total"
          />
        )
      },
      { title: "Live On Site", data: <DashBoardProduct category="live" /> },
      { title: "Under Review", data: <DashBoardProduct category="review" /> },
      { title: "Rejected", data: <DashBoardProduct category="rejected" /> },
      { title: "Sold Out", data: <DashBoardProduct category="sold-out" /> }
    ];

    return tabs.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.data,
      key: index,
      tabClassName: "tab",
      panelClassName: "seller-db-panel"
    }));
  }
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Tabs
                    items={this.getTabs()}
                    transformWidth={960}
                    transform={true}
                    showMoreLabel={"More..."}
                    showInkBar={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerProducts: state.sellerRegister.sellerProducts
  };
};
export default connect(mapStateToProps, { fetchSellerProducts })(
  SellerProducts
);
