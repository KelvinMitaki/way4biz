import React from "react";
import Tabs from "react-responsive-tabs";
import "./SellerOrders.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";

import DashBoardOrder from "./DashBoardOrder";
import { fetchSellerOrders } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class SellerOrders extends React.Component {
  componentDidMount() {
    this.props.fetchSellerOrders();
  }
  getTabs() {
    let tabs = [
      {
        title: "All",
        data: <DashBoardOrder sellerOrders={this.props.sellerOrders} />
      },
      { title: "New", data: <DashBoardOrder /> },
      { title: "Shipped", data: <DashBoardOrder /> },
      { title: "Delivered", data: <DashBoardOrder /> },
      { title: "Returned", data: <DashBoardOrder /> },
      { title: "Cancelled", data: <DashBoardOrder /> }
    ];

    return tabs.map((tab, index) => ({
      title: tab.title,
      getContent: () => tab.data,
      key: index,
      tabClassName: "tab",
      panelClassName: "order-db-panel"
    }));
  }
  render() {
    if (this.props.sellerOrdersLoading) return <ScreenLoader />;
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9">
            <div className="container seller-dashboard-wrapper">
              <div className="row">
                <div className="col">
                  <h3 style={{ textAlign: "center" }}>Orders</h3>
                </div>
              </div>
              <div className="row  my-4">
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
    sellerOrders: state.sellerRegister.sellerOrders,
    sellerOrdersLoading: state.auth.sellerOrdersLoading
  };
};
export default connect(mapStateToProps, { fetchSellerOrders })(SellerOrders);
