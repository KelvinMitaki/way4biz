import React from "react";

import "./SellerDashBoardReviews.css";

import SellerDashBoardMenu from "./SellerDashBoardMenu";
import SellerDashBoardHeader from "./SellerDashBoardHeader";
import Rating from "../Product/Rating";

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
            <div className="review-wrapper mb-3">
              <Rating clickable={false} size={15} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur minus libero ipsum illum temporibus quisquam
                blanditiis neque debitis sequi repellendus. Sint, doloremque
                sapiente itaque autem accusamus omnis, ex quaerat mollitia
                accusantium hic ab eius amet sit excepturi cupiditate nesciunt!
                Iusto harum nesciunt consequatur eius consectetur iure tenetur
                qui aspernatur reprehenderit!
              </p>
              <h6 className="my-2">By Fred on 1/1/1</h6>
            </div>

            <div className="review-wrapper">
              <h1>Review 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur minus libero ipsum illum temporibus quisquam
                blanditiis neque debitis sequi repellendus. Sint, doloremque
                sapiente itaque autem accusamus omnis, ex quaerat mollitia
                accusantium hic ab eius amet sit excepturi cupiditate nesciunt!
                Iusto harum nesciunt consequatur eius consectetur iure tenetur
                qui aspernatur reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
