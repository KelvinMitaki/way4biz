import React from "react";
import { Link } from "react-router-dom";

import "./Market.css";
import { connect } from "react-redux";

class Market extends React.Component {
  render() {
    return (
      <div className="container-fluid market">
        <div className="col market-head">
          <h1>Selling</h1>
        </div>
        <div className="row products">
          {this.props.products.length !== 0 &&
            this.props.products.map(product => (
              <Link
                key={product._id}
                to="/product"
                className="col-6 col-md-4 col-lg-2 product"
              >
                <img
                  width="254px"
                  height="254px"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="price">Ksh.{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          <Link to="/product" className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/1.jpg" />
            <div>
              <h3 className="product-name">Samsung LG "24</h3>
              <p className="price">Ksh.80,000</p>
              <p className="price-before">Ksh.90,000</p>
            </div>
          </Link>

          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/2.jpg" />
            <div>
              <h3 className="product-name">Oppo f11</h3>
              <p className="price">Ksh.30,000</p>
              <p className="price-before">Ksh.35,000</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/3.jpg" />
            <div>
              <h3 className="product-name">Drinking Water</h3>
              <p className="price">Ksh.200</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/4.jpg" />
            <div>
              <h3 className="product-name">Minute Maid 500ml</h3>
              <p className="price">Ksh.200</p>
              <p className="price-before">Ksh.300</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/5.jpg" />
            <div>
              <h3 className="product-name">Forever Body Lotion</h3>
              <p className="price">Ksh.800</p>
              <p className="price-before">Ksh.950</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/6.jpg" />
            <div>
              <h3 className="product-name">Dell Monitor 21 inches</h3>
              <p className="price">Ksh.80,000</p>
              <p className="price-before">Ksh.100,000</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/7.jpg" />
            <div>
              <h3 className="product-name">Asus Zenbook</h3>
              <p className="price">Ksh.50,000</p>
              <p className="price-before">Ksh.65,000</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/8.jpg" />
            <div>
              <h3 className="product-name">Dell XPS 15 inches</h3>
              <p className="price">Ksh.140,000</p>
              <p className="price-before">Ksh.160,000</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/9.jpg" />
            <div>
              <h3 className="product-name">Kitenge Handbags</h3>
              <p className="price">Ksh.500</p>
              <p className="price-before">Ksh.700</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/10.jpg" />
            <div>
              <h3 className="product-name">Baby Diapers</h3>
              <p className="price">Ksh.80</p>
              <p className="price-before">Ksh.120</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/11.jpg" />
            <div>
              <h3 className="product-name">HIFINIT "21</h3>
              <p className="price">Ksh.10,000</p>
              <p className="price-before">Ksh.13,000</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 product">
            <img src="product-imgs/12.jpg" />
            <div>
              <h3 className="product-name">V9 Wireless Bluetooth Headphones</h3>
              <p className="price">Ksh.200</p>
              <p className="price-before">Ksh.250</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};
export default connect(mapStateToProps)(Market);
