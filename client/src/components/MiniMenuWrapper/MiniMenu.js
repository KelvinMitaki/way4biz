import React from "react";


import "./MiniMenu.css";


class MiniMenu extends React.Component {
    render(){
        return (
            <div id="mini-menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 mini-menu-item">
                            <div className="flaticon-home mini-menu-icon"></div>
                            <h6>Home</h6>
                        </div>
                        <div className="col-3 mini-menu-item">
                            <div className="flaticon-list mini-menu-icon"></div>
                            <h6>Category</h6>
                        </div>
                        <div className="col-3 mini-menu-item">
                            <div className="flaticon-shopping-cart mini-menu-icon">
                                <span className="badge">0</span>
                            </div>
                            <h6>Cart</h6>
                        </div>
                        <div className="col-3 mini-menu-item">
                            <div className="flaticon-user mini-menu-icon"></div>
                            <h6>Account</h6>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MiniMenu