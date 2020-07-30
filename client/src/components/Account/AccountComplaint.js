import React from "react";
import "./AccountComplaint.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { IconContext } from "react-icons";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

class AccountComplaint extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <AccountHeader />
          <div className="container pending-reviews-wrapper">
            <div className="row">
              <div className="col-lg-4">
                <AccountMenu />
              </div>
              <div className="col-lg-8  box-container">
                <div className="container">
                  <IconContext.Provider
                    value={{ className: "arrow-icon ml-3 my-2" }}
                  >
                    <div className="d-flex align-items-center">
                      <div style={{ cursor: "pointer" }}>
                        <BsArrowLeft />
                      </div>
                      <h3 className="ml-3">Complaint</h3>
                    </div>
                  </IconContext.Provider>
                </div>

                <div className="box-container p-2 account-complain">
                  <div className="container">
                    <h4 className="my-1">Seller</h4>
                    <div className="row box-container p-2 m-0">
                      <div className="col-md-6 my-1 p-0">
                        <h6>
                          <strong className="mr-1">Name:</strong>
                          Mesut Ozil
                        </h6>
                      </div>

                      <div className="col-md-6 my-1 p-0">
                        <h6>
                          <Link to="/" className="account-visit-store">
                            Visit Store
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div>
                      <h4 className="mt-3 mb-1">Complaint</h4>
                      <div className="box-container p-2">
                        <p style={{ fontSize: "17px" }}>
                          The quick brown fox jumped over the lazy dog.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="my-1">Product Details</h4>
                      <div className="box-container">
                        <div className="row m-0 ">
                          <div className="col-md-6">
                            <h6 className="my-1">
                              <strong className="mr-2">Name:</strong>
                              Great Beer
                            </h6>
                            <h6 className="my-1">
                              <strong className="mr-2">Unit Price:</strong>
                              ksh. 1500
                            </h6>
                          </div>
                          <div className="col-md-6">
                            <h6 className="my-1">
                              <strong className="mr-2">
                                Quantity Ordered:
                              </strong>
                              2
                            </h6>
                            <h6 className="my-1">
                              <strong className="mr-2">Total Price:</strong>
                              ksh. 3000
                            </h6>
                          </div>
                        </div>
                        <div className="account-complain-product-images mt-3">
                          <div>
                            <img src="/1.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
  // return <Redirect to="/" />;
}

export default AccountComplaint;
