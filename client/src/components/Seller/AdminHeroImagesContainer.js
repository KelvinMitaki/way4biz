import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import "./ProductImageUploadsContainer.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteImage } from "../../redux/actions";

// **TODO** MAP IMAGES FROM THE DB AND FROM S3
class ProductImageUploadsContainer extends React.Component {
  render() {
    const imageLength = this.props.heroImages && this.props.heroImages.length;

    return (
      <div className="uploads-container box-container">
        {/* mapping here */}
        {this.props.heroImages &&
          this.props.heroImages.length !== 0 &&
          this.props.heroImages.map(image => (
            <div key={image._id} className="uploaded-product-image-wrapper">
              <div className="uploaded-product-image">
                <img
                  src={`https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${image.imageUrl} `}
                  alt={image.imageUrl}
                />
              </div>
              <div
                // onClick={() =>
                // }
                className={`btn upload-image-trash-button  ${
                  imageLength === 1 && `disable-trash disabled`
                }`}
              >
                <FaTrashAlt className="m-0 p-0" />{" "}
                <span className="ml-2">Delete</span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    heroImages: state.product.heroImages,
    deleteImageLoading: state.image.deleteImageLoading
  };
};
export default withRouter(
  connect(mapStateToProps, { deleteImage })(ProductImageUploadsContainer)
);
