import React from "react";
import { Link } from "react-router-dom";

import "./DashBoardOrder.css";
import { fetchSellerOrderDetails } from "../../redux/actions";
import { connect } from "react-redux";

class DashBoardOrder extends React.Component {
  render() {
    return (
      <div className="container-fluid p-4" style={{ backgroundColor: "#fff" }}>
        <div className="row no-gutters y">
          <div className="col d-flex mb-2">
            <h6 className="col-lg-4 p-0" style={{ textAlign: "left" }}>
              Order Info
            </h6>
            <h6 className="col-lg-2 p-0">Items No.</h6>
            <h6 className="col-lg-3 p-0">Destination</h6>
            <h6 className="col-lg-2 p-0">Total Amount</h6>
            <h6 className="col-lg-1 p-0">Status</h6>
          </div>
        </div>
        <div className="row dashboard-order-wrapper box-container no-gutters">
          {/* mapping will take place here */}
          {this.props.sellerOrders &&
            this.props.sellerOrders.length !== 0 &&
            this.props.sellerOrders.map(order => (
              <React.Fragment key={order._id}>
                <div className="col-6 col-lg-4">
                  <div>
                    <strong className="mr-2">ID:</strong>
                    {order._id}
                  </div>
                  <div>
                    <strong className="mr-2">Date:</strong>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="col-6 col-lg-2">
                  <div>
                    <strong className="x mr-2">Qty:</strong>
                    {order.items.length}
                  </div>
                  <div className="view-order-details-link">
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
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div>
                    <strong className="x mr-2">Destination:</strong>Rongai
                  </div>
                </div>
                <div className="col-6 col-lg-2">
                  <div>
                    Ksh.
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
                </div>
                <div className="col-6 col-lg-1">
                  <div>Delivered</div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchSellerOrderDetails })(DashBoardOrder);
