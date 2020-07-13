import React from "react";

import "./SellerDashBoardReviews.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import Rating from "../Product/Rating";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

class Review extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-wrapper">
        <SellerDashBoardHeader />
        <div className="row no-gutters">
          <div className="col-lg-3">
            <SellerDashBoardMenu />
          </div>
          <div className="col-lg-9 reviews-wrapper m-0">
            <div className="col-md-10  mx-auto box-container">
              {/* mapping here */}
              <div className="review-wrapper mb-3">
                <Rating clickable={false} size={15} value={4} />
                <div className="seller-review-product-title-name">
                  <h6 className="my-2">I hate this piece of shit</h6>
                  <IconContext.Provider
                    value={{ className: "seller-review-title-arrow" }}
                  >
                    <BsArrowRight />
                  </IconContext.Provider>
                  <p>Product Name </p>
                </div>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur minus libero ipsum illum temporibus quisquam
                  blanditiis neque debitis sequi repellendus. Sint, doloremque
                </p>
                <h6 className="my-2">By Fred on 1/1/1</h6>
              </div>
              <div className="review-wrapper mb-3">
                <Rating clickable={false} size={15} value={4} />
                <div className="seller-review-product-title-name">
                  <h6 className="my-2">I hate this piece of shit</h6>
                  <IconContext.Provider
                    value={{ className: "seller-review-title-arrow" }}
                  >
                    <BsArrowRight />
                  </IconContext.Provider>
                  <p>Product Name </p>
                </div>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur minus libero ipsum illum temporibus quisquam
                  blanditiis neque debitis sequi repellendus. Sint, doloremque
                </p>
                <h6 className="my-2">By Fred on 1/1/1</h6>
              </div>{" "}
              <div className="review-wrapper mb-3">
                <Rating clickable={false} size={15} value={4} />
                <div className="seller-review-product-title-name">
                  <h6 className="my-2">I hate this piece of shit</h6>
                  <IconContext.Provider
                    value={{ className: "seller-review-title-arrow" }}
                  >
                    <BsArrowRight />
                  </IconContext.Provider>
                  <p>Product Name </p>
                </div>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur minus libero ipsum illum temporibus quisquam
                  blanditiis neque debitis sequi repellendus. Sint, doloremque
                </p>
                <h6 className="my-2">By Fred on 1/1/1</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
