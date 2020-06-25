import React from "react";


import "./CaroDisplay.css";
import Carousel from "./Carousel";


class CaroDisplay extends React.Component {
    render(){
        return (
            <div id="caro-display" className="col col-lg-9">
                <Carousel/>
            </div>
        )
    }
}


export default CaroDisplay