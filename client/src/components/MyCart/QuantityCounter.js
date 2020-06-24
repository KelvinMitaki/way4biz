import React from "react";


import "./QuantityCounter.css";


class QuantityCounter extends React.Component {
    render(){
        return (
            <div id="quantity-counter">
                <button className="mr-3">-</button>
                <p>1</p>
                <button className="ml-3">+</button>
            </div>
        )
    }
}


export default QuantityCounter