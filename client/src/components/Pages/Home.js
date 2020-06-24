import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  render() {
    if (!this.props.isSignedIn) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <div>
        <Hero />
        <Market />
      </div>
    );
  }
}

export default Home;
