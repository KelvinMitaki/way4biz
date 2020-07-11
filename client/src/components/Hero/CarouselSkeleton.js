import React from "react";
import BoxSkeleton from "../Pages/BoxSkeleton";

class CarouselSkeleton extends React.Component {
  render() {
    return (
      <div className="hero-main-wrapper">
        <div id="hero-main-wrapper-left">
          <div className="hero-carousel-wrapper">
            <BoxSkeleton elemClass={"hero-carousel"} />
          </div>
          <div className="random-stuff-wrapper">
            <div className="random-stuff">
              {Array(4)
                .fill("")
                .map(() => {
                  return (
                    <div>
                      <BoxSkeleton elemClass={"hero-random-image"} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div id="hero-main-wrapper-right">
          <div className="hero-account-section">
            <div className="d-flex justify-content-center flex-column align-items-center"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselSkeleton;
