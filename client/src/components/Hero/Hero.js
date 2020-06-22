import React from "react";


import "./Hero.css";

import SideBar from "./SideBar";


class Hero extends React.Component {
    render(){
        return (
            <div id="hero" className="row">
                <div className="container-fluid">
                    <SideBar/>
                </div>
            </div>
        )
    }
}


export default Hero;