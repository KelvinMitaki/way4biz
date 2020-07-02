import React from "react";

import "./DashBoardProductMediumScreens.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DashBoardProductMediumScreen extends React.Component {
  render() {
    if (this.props.sellerProducts.length !== 0) {
      return this.props.sellerProducts.map(p => (
        <React.Fragment key={p._id}>
          <div className="container">
            <div className="row">
              <div className="col dashboard-product-medium-screen-section box-container">
                <div className="col dashboard-product-md-screen-image">
                  <div className="db-md-top">
                    <div>
                      <img
                        height="100px"
                        width="100px"
                        src={p.imageUrl}
                        alt={p.name}
                      />
                      <p>
                        <strong>{p.name}</strong>
                      </p>
                    </div>
                    <div className="seller-db-md-screen-price-status">
                      <div>
                        <strong>Price:</strong>
                        <p>Ksh.{p.price.toLocaleString()}</p>
                      </div>
                      <div>
                        <strong>Status:</strong>
                        <p
                          className="bg-success"
                          style={{
                            display: "block",
                            color: "#fff",
                            textAlign: "center",
                            borderRadius: "3px"
                          }}
                        >
                          Live
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="db-md-bottom">
                    <p>
                      <strong>Qty:</strong> {p.stockQuantity}
                    </p>
                    <p>
                      <Link
                        className="btn btn-sm btn-danger"
                        to={`/seller/edit/${p._id}`}
                      >
                        Edit
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ));
    }
    return null;
  }
}
const mapStateToProps = state => {
  return {
    sellerProducts: state.sellerRegister.sellerProducts
  };
};
export default connect(mapStateToProps)(DashBoardProductMediumScreen);
