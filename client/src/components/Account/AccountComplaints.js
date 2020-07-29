import React from "react";
import "./AccountComplaints.css";
import AccountMenu from "./AccountMenu";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import AccountHeader from "../Header/AccountHeader";
import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
// import { BsArrowLeft } from "react-icons/bs";
// import ScreenLoader from "../Pages/ScreenLoader";

class AccountComplaints extends React.Component {
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
                  <h3 className="ml-3">Complaints</h3>
                </div>
                <div className="container mt-3">
                  <div className="box-container account-complain">
                    <p>
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
                    </p>
                    <p className="d-flex justify-content-end">
                      <Link to="/complaint" className="complaint-more-link">
                        More
                      </Link>
                    </p>
                  </div>
                  <div className="box-container account-complain">
                    <p>
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
                    </p>
                    <p className="d-flex justify-content-end">
                      <Link to="/complaint" className="complaint-more-link">
                        More
                      </Link>
                    </p>
                  </div>
                  <div className="box-container account-complain">
                    <p>
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
                    </p>
                    <p className="d-flex justify-content-end">
                      <Link to="/complaint" className="complaint-more-link">
                        More
                      </Link>
                    </p>
                  </div>
                  <div className="box-container account-complain">
                    <p>
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
                    </p>
                    <p className="d-flex justify-content-end">
                      <Link to="/complaint" className="complaint-more-link">
                        More
                      </Link>
                    </p>
                  </div>
                  <div className="box-container account-complain">
                    <p>
                      The quick brown fox jumped over the lazy dog. The quick
                      brown fox jumped over the lazy dog. The quick brown fox
                      jumped over the lazy dog. The quick brown fox jumped over
                      the lazy dog. The quick brown fox jumped over the lazy
                      dog. The quick brown fox jumped over the lazy dog.
                    </p>
                    <p className="d-flex justify-content-end">
                      <Link to="/complaint" className="complaint-more-link">
                        More
                      </Link>
                    </p>
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
}

export default AccountComplaints;
