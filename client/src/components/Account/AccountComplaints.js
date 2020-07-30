import React from "react";
import "./AccountComplaints.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { Link } from "react-router-dom";
import { fetchBuyerComplaints } from "../../redux/actions";
import { connect } from "react-redux";
import ScreenLoader from "../Pages/ScreenLoader";
import { BsQuestionCircle } from "react-icons/bs";
// import { IconContext } from "react-icons";
// import { BsArrowLeft } from "react-icons/bs";
// import ScreenLoader from "../Pages/ScreenLoader";

class AccountComplaints extends React.Component {
  componentDidMount() {
    this.props.fetchBuyerComplaints();
  }
  render() {
    if (!this.props.buyerComplaints) return <ScreenLoader />;
    return (
      <div className="main">
        <div className="content">
          <AccountHeader />
          <div className="container pending-reviews-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <AccountMenu />
              </div>
              <div
                className="col-lg-8  box-container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {this.props.buyerComplaints.length !== 0 ? (
                  <React.Fragment>
                    {" "}
                    <div className="container">
                      <h3 className="mt-2" style={{ textAlign: "center" }}>
                        Complaints
                      </h3>
                    </div>
                    <div className="container mt-3">
                      {/* mapping here */}
                      {this.props.buyerComplaints.length !== 0 &&
                        this.props.buyerComplaints.map((comp) => (
                          <div
                            key={comp._id}
                            className="box-container account-complain"
                          >
                            <p>{comp.body}</p>
                            <p className="d-flex justify-content-end">
                              <Link
                                to={`/complaint/${comp._id}`}
                                className="complaint-more-link"
                              >
                                More
                              </Link>
                            </p>
                          </div>
                        ))}
                    </div>
                  </React.Fragment>
                ) : (
                  <div className="no-buyer-complaints">
                    <BsQuestionCircle
                      style={{ fontSize: "100px", color: "#f76b1a" }}
                    />
                    <h5 className="mt-3">No complaints filed yet.</h5>
                  </div>
                )}
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
  return {
    buyerComplaints: state.product.buyerComplaints,
  };
};
export default connect(mapStateToProps, { fetchBuyerComplaints })(
  AccountComplaints
);
