import React from "react";

import "./Search.css";


class Search extends React.Component {

    constructor(props){
        super(props);
        this.state={
            "typing":""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            typing:e.target.value
        })
    }


    render(){
        return (
            <div id="header-search">
                <div className="input-group">
                    <input type="text" onChange={this.handleChange} className="form-control header-input-search" placeholder="bata shoes"/>
                    <div className="input-group-append">
                        <button id="header-search-btn">
                            <i className="fa fa-search fa-2x"></i>
                            <span>Search</span>
                        </button>
                    </div>                   
                </div>
               {this.state.typing !== "" ?  <div className="search-output"></div>: null}
            </div>
        )
    }
}

export default Search