import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";


class Home extends React.Component{
    render(){
        return (
            <div>
                <Hero/>
                <Market/>
            </div>
        )
    }
}


export default Home