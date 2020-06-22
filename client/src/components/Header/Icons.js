import React from "react";

import "./Icons.css";

import User from "./User";

class Icons extends React.Component{
    render(){
        return (
            <div id="header-icons">
                <User/>
                <div className="icon cart-icon flaticon-shopping-cart">
                    <span className="badge">0</span>
                
                </div>
            </div>
        )
    }
}


export default Icons