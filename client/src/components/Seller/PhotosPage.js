import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDropzone from "./ReactDropzone";
import ReactCropper from "./ReactCropper";
import "./PhotosPage.css";

const PhotosPage = ({ uploadProfileImage }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);
  const handleUploadImage = async () => {
    try {
      // await uploadProfileImage(image,files[0].path)
      handleCancelCrop();

      console.log("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };
  console.log(image);
  return (
    <div className="seller-products-photo-uploader">
      <ReactDropzone setFiles={setFiles} />
      {files.length > 0 && (
        <ReactCropper setImage={setImage} imagePreview={files[0].preview} />
      )}
      {files.length > 0 && (
        <React.Fragment>
          <div
            className="img-preview"
            style={{
              minHeight: "200px",
              minWidth: "200px",
              overflow: "hidden",
              flex: "2"
            }}
          />
          <button onClick={handleUploadImage}>Upload Image</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default PhotosPage;
