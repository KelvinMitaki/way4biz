import React from "react";

import "./Icons.css";

import User from "./User";
import Cart from "./Cart";

class Icons extends React.Component{
    render(){
        return (
            <div id="header-icons">
                <User/>
                <Cart/>
            </div>
        )
    }
}


export default Icons