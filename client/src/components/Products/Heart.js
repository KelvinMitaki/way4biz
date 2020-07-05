import React from "react";
import { IconContext } from "react-icons";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

class Heart extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <IconContext.Provider value={{ size: "1.5em", color: "#f76b1a" }}>
          {this.state.clicked ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this.setState({ clicked: false })}
            >
              <IoMdHeart />
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this.setState({ clicked: true })}
            >
              <IoMdHeartEmpty />
            </div>
          )}
        </IconContext.Provider>
      </div>
    );
  }
}

export default Heart;
