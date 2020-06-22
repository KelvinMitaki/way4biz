import React from "react";


import "./SideBar.css";


import Categories from "./Categories";


class SideBar extends React.Component {
    render(){
        return (
            <div id="sidebar" className="col-lg-3">
                <Categories/>
            </div>
        )
    }
}


export default SideBar