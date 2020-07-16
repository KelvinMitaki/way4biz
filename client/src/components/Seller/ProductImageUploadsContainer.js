import React from "react";
import { IconContext } from "react-icons";
import { FaTrashAlt, FaOpencart } from "react-icons/fa";

import "./ProductImageUploadsContainer.css";
import { Link } from "react-router-dom";

class ProductImageUploadsContainer extends React.Component {
  render() {
    return (
      <div className="uploads-container box-container">
        {/* mapping here */}
        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>

        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>

        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>

        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>

        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>

        <div className="uploaded-product-image-wrapper">
          <div className="uploaded-product-image">
            <img src="/1.jpg" />
          </div>
          <button className="btn upload-image-trash-button">
            <FaTrashAlt className="m-0 p-0" />{" "}
            <span className="ml-2">Delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductImageUploadsContainer;
