import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    console.log(this.props.isSignedIn);
    console.log(this.props);

    return (
      <div>
        <Hero />
        <Market />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps)(Home);
