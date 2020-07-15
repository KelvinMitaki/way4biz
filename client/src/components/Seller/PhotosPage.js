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
      files.forEach((file) => URL.revokeObjectURL(file.preview));
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
    <div
      className="container p-0 box-container"
      style={{ width: "90%", margin: "20px auto", borderRadius: "10px" }}
    >
      <div className="row product-image-upload-hero no-gutters">
        <div className="col-lg-4">Step 1-Add Photo</div>
        <div className="col-lg-4">Step 2-Resize</div>
        <div className="col-lg-4">Step 3-Preview</div>
      </div>
      <hr className="mb-3" />
      <div className="row no-gutters align-items-center drop-stuff">
        <div className="col-lg-4">
          <ReactDropzone setFiles={setFiles} />
        </div>
        <div className="col-lg-4">
          {files.length > 0 && (
            <ReactCropper setImage={setImage} imagePreview={files[0].preview} />
          )}
        </div>
        <div className="col-lg-4">
          {files.length > 0 && (
            <React.Fragment>
              <div
                className="img-preview"
                style={{
                  minHeight: "200px",
                  // height: "100%",
                  minWidth: "200px",
                  overflow: "hidden",
                  // flex: "2",
                }}
              />
              <div className="mt-3 product-upload-btn-wrapper">
                <button className="ml-5" onClick={handleUploadImage}>
                  Upload Image
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
