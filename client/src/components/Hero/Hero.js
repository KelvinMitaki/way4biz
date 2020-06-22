import React from "react";


import "./Hero.css";

import SideBar from "./SideBar";
import CaroDisplay from "./CaroDisplay";


class Hero extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row" id="hero">
                    <SideBar/>
                    <CaroDisplay/>
                </div>
            </div>
        )
    }
}


export default Hero;