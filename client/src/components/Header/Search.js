import React from "react";

import "./Search.css";


class Search extends React.Component {
    render(){
        return (
            <div id="header-search">
                <div className="input-group">
                    <input type="text" className="form-control header-input-search" placeholder="bata shoes"/>
                    <div className="input-group-append">
                        <button id="header-search-btn">
                            <i className="fa fa-search fa-2x"></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search