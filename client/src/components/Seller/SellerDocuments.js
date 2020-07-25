import React from "react";
import PhotosPage from "./PhotosPage";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import SellerImage from "./SellerImage";

class SellerDocuments extends React.Component {
  state = {
    idUploaded: false,
    passportUploaded: false
  };

  componentDidMount() {
    this.props.proceed(false);
    scroll.scrollToTop();
    if (this.props.sellerImageUrl.length > 1) {
      this.props.proceed(true);
    }
  }

  componentDidUpdate() {
    if (this.props.sellerImageUrl.length > 1) {
      this.props.proceed(true);
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    return (
      <div className="container">
        <h3>Please upload valid copies of the following documents.</h3>
        <h4>National ID</h4>
        <SellerImage />
        <h4>PassPort</h4>
        <SellerImage />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sellerImageUrl: state.sellerDetails.sellerImageUrl
  };
};
export default connect(mapStateToProps)(SellerDocuments);
