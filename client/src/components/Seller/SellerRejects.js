import React from "react";

import "./SellerRejects.css";
import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import { Link } from "react-router-dom";
import { fetchRejects } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";

class SellerRejects extends React.Component {
  componentDidMount() {
    this.props.fetchRejects();
  }
  render() {
    if (!this.props.sellerRejects) return <ScreenLoader />;
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />

        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 py-3">
            <div className="container box-container">
              <h3 style={{ textAlign: "center" }} className="mt-3 mb-2">
                Rejected Products
              </h3>
              {/* mapping here */}
              {this.props.sellerRejects.length !== 0 &&
                this.props.sellerRejects.map(rej => (
                  <div key={rej._id} className="box-container reject-info p-2">
                    <h5 className="my-2">{rej.name}</h5>
                    <p>
                      {rej.body} -{" "}
                      <strong>
                        {new Date(rej.createdAt).toLocaleString()}
                      </strong>
                    </p>
                    <div className="reject-links mt-2 pt-2">
                      <Link
                        to={`/seller/edit/${rej.productId}`}
                        className="reject-link"
                      >
                        Edit Product
                      </Link>
                      <Link to="/" className="reject-link">
                        Delete Product
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerRejects: state.product.sellerRejects
  };
};
export default connect(mapStateToProps, { fetchRejects })(SellerRejects);
