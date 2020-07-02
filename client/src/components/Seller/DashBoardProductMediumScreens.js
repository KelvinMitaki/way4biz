import React from "react";

import "./DashBoardProductMediumScreens.css";
import { connect } from "react-redux";

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
                      <img height="100px" width="100px" src={p.imageUrl} />
                      <p>{p.name}</p>
                    </div>
                    <div className="seller-db-md-screen-price-status">
                      <div>
                        <p>Price:</p>
                        <p>Ksh.{p.price.toLocaleString()}</p>
                      </div>
                      <div>
                        <p>Status:</p>
                        <p>Live</p>
                      </div>
                    </div>
                  </div>
                  <div className="db-md-bottom">
                    <p>Qty:{p.stockQuantity}</p>
                    <p>Edit</p>
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
