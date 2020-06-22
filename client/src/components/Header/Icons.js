import React from "react";

import "./Icons.css";

class Icons extends React.Component{
    render(){
        return (
            <div id="header-icons">
                <div className="icon user-icon flaticon-user">
                    <span>Sign In | Join</span>
                </div>
                <div className="icon cart-icon flaticon-shopping-cart">
                    <span className="badge">0</span>
                
                </div>
            </div>
        )
    }
}


export default Icons