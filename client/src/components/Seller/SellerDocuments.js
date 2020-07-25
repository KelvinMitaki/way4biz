import React from "react";
import PhotosPage from "./PhotosPage";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";

class SellerDocuments extends React.Component {
  state = {
    idUploaded: false,
    passportUploaded: false
  };

  componentDidMount() {
    this.props.proceed(false);
    scroll.scrollToTop();
    if (this.props.imageUrl.length > 1) {
      this.props.proceed(true);
    }
  }

  componentDidUpdate() {
    if (this.props.imageUrl.length > 1) {
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
        <PhotosPage />
        <h4>PassPort</h4>
        <PhotosPage />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    imageUrl: state.image.imageUrl
  };
};
export default connect(mapStateToProps)(SellerDocuments);
