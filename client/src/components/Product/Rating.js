import React from "react";
import ReactStars from "react-rating-stars-component";

import "./Rating.css";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  ratingChanged(val) {
    console.log(val);
  }

  render() {
    return (
      <div>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={24}
          half={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          color2={"#f76b10"}
          color1={"#d4d4d4"}
          className="rating-container"
        />
      </div>
    );
  }
}

export default Rating;
