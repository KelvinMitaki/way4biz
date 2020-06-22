import React from "react";


import "./Hero.css";

import SideBar from "./SideBar";
import CaroDisplay from "./CaroDisplay";


class Hero extends React.Component {
    render(){
        return (
            <div id="hero" className="container-fluid">
                <div className="row no-gutters">
                    <SideBar/>
                    <CaroDisplay/>
                </div>
            </div>
        )
    }
}


export default Hero;