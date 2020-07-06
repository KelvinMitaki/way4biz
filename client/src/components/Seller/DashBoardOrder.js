import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardOrder.css";
import {
  fetchSellerOrders,
  fetchSellerOrderDetails
} from "../../redux/actions";
import { connect } from "react-redux";

class DashBoardOrder extends React.Component {
  componentDidMount() {
    this.props.fetchSellerOrders();
  }
  render() {
    return (
      <div className="container">
        <div className="row no-gutters">
          {this.props.sellerOrders.length !== 0 &&
            this.props.sellerOrders.map(order => (
              <React.Fragment key={order._id}>
                <div className="col-lg-12 d-flex box-container seller-dashboard-order-wrapper">
                  <div id="dashboard-order-id" className="col-lg-4">
                    <div>
                      <p>
                        <strong className="mr-2">Order id:</strong>
                        {order._id}
                      </p>
                      <p>
                        <strong className="mr-2">Date:</strong>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div id="dashboard-order-num-items" className="col-lg-2">
                    <div>
                      <p>{order.items.length}</p>
                      <p id="view-order-details-link">
                        <Link
                          to="/order/details"
                          onClick={() =>
                            this.props.fetchSellerOrderDetails({
                              items: order.items,
                              productSellerData: order.productSellerData
                            })
                          }
                        >
                          View Items
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div id="dashboard-order-destination" className="col-lg-2">
                    Rongai
                  </div>
                  <div id="dashboard-order-total-amount" className="col-lg-2">
                    ksh.
                    {order.productSellerData
                      .map(prod => {
                        const matchingProd = order.items.find(
                          item => item.product === prod._id
                        );
                        if (matchingProd) {
                          return prod.price * matchingProd.quantity;
                        }
                        return null;
                      })
                      .reduce((acc, curr) => acc + curr, 0)
                      .toLocaleString()}
                  </div>
                  <div id="dashboard-delivery-status" className="col-lg-1">
                    Delivered
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerOrders: state.sellerRegister.sellerOrders
  };
};
export default connect(mapStateToProps, {
  fetchSellerOrders,
  fetchSellerOrderDetails
})(DashBoardOrder);
