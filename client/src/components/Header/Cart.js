import React from "react";


import "./Cart.css";


class Cart extends React.Component {
    render(){
        return (
            <div className="icon cart-icon flaticon-shopping-cart">
                <span className="badge">0</span>
            </div>
        )
    }
}


export default Cart