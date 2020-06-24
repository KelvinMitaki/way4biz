import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";

<<<<<<< HEAD
class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Market />
      </div>
    );
  }
=======
import "./Home.css";

class Home extends React.Component{
    render(){
        return (
            <div className="home-section">
                <Hero/>
                <Market/>
            </div>
        )
    }
>>>>>>> 04e7bbbd17dc8627a274daea57febcb57090b65b
}

export default Home;
