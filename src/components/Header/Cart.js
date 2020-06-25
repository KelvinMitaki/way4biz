import React from "react";
import {Link} from "react-router-dom";


import "./Cart.css";


class Cart extends React.Component {
    render(){
        return (
            <Link to="/cart" className="link">
                <div className="icon cart-icon flaticon-shopping-cart">
                    <span className="badge">0</span>
                </div>
            </Link>
           
        )
    }
}


export default Cart