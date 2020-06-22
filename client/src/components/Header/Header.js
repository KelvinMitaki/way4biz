import React from "react";

import "./Header.css";

import Logo from "./Logo";

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <Logo/>
                {/* <Search/>
                <User/> */}
            </div>
        )
    }
}


export default Header