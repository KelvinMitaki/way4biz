import React from "react";


import "./Product.css";


import QuantityCounter from "./QuantityCounter";


class Product extends React.Component {
    render(){
        return (
            <div id="container-fluid">
                <div className="row">
                    <div className="col-md-6 product-imgs">
                        <img src="product-imgs/1.jpg" alt="product-image"/>
                        <div className="feature-imgs d-flex">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-md-6 product-info">
                        <h3 id="prod-name">Dell XPS laptop "15</h3>
                        <div className="price-rating d-flex">
                            <h3>Ksh.140,000</h3>
                            <ul class="rating">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="far fa-star"></i></li>
                            </ul>
                        </div>
                        <div id="cart-quantity">
                            <div>
                                <QuantityCounter/>
                            </div>
                            <button class="btn btn-md">Add to Cart</button>
                        </div>
                        <div id="features">
                            <ul>
                                <li>Backlit keyboard</li>
                                <li>11 hours Battery life</li>
                                <li>16gb ram DDR4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Product