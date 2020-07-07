import React, { Component } from "react";
import { fetchBuyerForSeller } from "../../redux/actions";
import { connect } from "react-redux";

export class BuyerDestination extends Component {
  componentDidMount() {
    this.props.fetchBuyerForSeller(this.props.buyerId);
  }
  render() {
    return (
      <div>
        {this.props.buyerForSeller && this.props.buyerForSeller.address}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    buyerForSeller: state.sellerRegister.buyerForSeller
  };
};
export default connect(mapStateToProps, { fetchBuyerForSeller })(
  BuyerDestination
);
