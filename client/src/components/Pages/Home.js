import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";

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
}


export default Home