import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import "./ProductImageUploadsContainer.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// **TODO** MAP IMAGES FROM THE DB AND FROM S3
class ProductImageUploadsContainer extends React.Component {
  render() {
    return (
      <div className="uploads-container box-container">
        {/* mapping here */}
        {this.props.imageUrl.map(url => (
          <div key={url} className="uploaded-product-image-wrapper">
            <div className="uploaded-product-image">
              <img
                src={`https://e-commerce-gig.s3.eu-west-2.amazonaws.com/${url}`}
                alt={url}
              />
            </div>
            <button className="btn upload-image-trash-button">
              <FaTrashAlt className="m-0 p-0" />{" "}
              <span className="ml-2">Delete</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    imageUrl: state.image.imageUrl
  };
};
export default connect(mapStateToProps)(ProductImageUploadsContainer);
