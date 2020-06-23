import React from "react";

import "./QuantityCounter.css";


class QuantityCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity:1
        }
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }


    handleDecrement(e){
        e.preventDefault();
        this.setState(prevState=>{
            if (prevState.quantity>1){
                return {
                    quantity:prevState-1
                }
            }else{
                return{
                    quantity:prevState
                }
            }
        })
    }


    handleIncrement(e){
        e.preventDefault();
        this.setState(prevState=>{
            return {
                quantity:prevState+1
            }
            
        })
    }
    

    render(){
        return (
            <div id="quantity-counter">
                <p>Quantity</p>
                <div>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <p id="quantity">{this.state.quantity}</p>
                <div>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}


export default QuantityCounter