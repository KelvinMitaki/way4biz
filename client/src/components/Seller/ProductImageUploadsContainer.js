import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import "./ProductImageUploadsContainer.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteImage } from "../../redux/actions";

// **TODO** MAP IMAGES FROM THE DB AND FROM S3
class ProductImageUploadsContainer extends React.Component {
  render() {
    return (
      <div className="uploads-container box-container">
        {/* mapping here */}
        {this.props.imageUrl.length !== 0 &&
          this.props.imageUrl.map(url => (
            <div key={url} className="uploaded-product-image-wrapper">
              <div className="uploaded-product-image">
                <img
                  src={`https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${url}`}
                  alt={url}
                />
              </div>
              <div
                onClick={() =>
                  this.props.deleteImage(url, this.props.match.params.productId)
                }
                className="btn upload-image-trash-button"
              >
                {this.props.deleteImageLoading && (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {this.props.deleteImageLoading ? (
                  <span> {"  "}Loading...</span>
                ) : (
                  <React.Fragment>
                    <FaTrashAlt className="m-0 p-0" />{" "}
                    <span className="ml-2">Delete</span>
                  </React.Fragment>
                )}
              </div>
            </div>
          ))}
        {this.props.images &&
          this.props.images.length !== 0 &&
          this.props.images.map(url => (
            <div key={url} className="uploaded-product-image-wrapper">
              <div className="uploaded-product-image">
                <img
                  src={`https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${url}`}
                  alt={url}
                />
              </div>
              <div
                onClick={() =>
                  this.props.deleteImage(url, this.props.match.params.productId)
                }
                className="btn upload-image-trash-button"
              >
                {this.props.deleteImageLoading && (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {this.props.deleteImageLoading ? (
                  <span> {"  "}Loading...</span>
                ) : (
                  <React.Fragment>
                    <FaTrashAlt className="m-0 p-0" />{" "}
                    <span className="ml-2">Delete</span>
                  </React.Fragment>
                )}
              </div>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    imageUrl: state.image.imageUrl,
    deleteImageLoading: state.image.deleteImageLoading
  };
};
export default withRouter(
  connect(mapStateToProps, { deleteImage })(ProductImageUploadsContainer)
);
