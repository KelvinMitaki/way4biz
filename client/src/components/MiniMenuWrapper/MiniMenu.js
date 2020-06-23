import React from "react";
import {Link} from "react-router-dom";


import "./MiniMenu.css";


class MiniMenu extends React.Component {
    render(){
        return (
            <div id="mini-menu">
                <div className="container-fluid">
                    <div className="row flex-wrap">
                        <Link to="/" className="link col-3">
                            <div className="mini-menu-item">
                                <div className="flaticon-home mini-menu-icon"></div>
                                <h6>Home</h6>
                            </div>
                        </Link>
                        
                        <Link to="/" className="link col-3">
                            <div className="mini-menu-item">
                                <div className="flaticon-list mini-menu-icon"></div>
                                <h6>Category</h6>
                            </div>
                        </Link>
            
                        <Link to="/" className="link col-3"> 
                            <div className="mini-menu-item mini-cart">
                                <div className="flaticon-shopping-cart mini-menu-icon">
                                    <span className="badge">0</span>
                                </div>
                                <h6>Cart</h6>
                            </div>
                        </Link>
                        
                        <Link to="/" className="link col-3">
                            <div className="mini-menu-item">
                                <div className="flaticon-user mini-menu-icon"></div>
                                <h6>Account</h6>
                            </div>
                        </Link>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default MiniMenu