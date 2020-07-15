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
      className="container-v p-0 box-container"
      style={{ width: "90%", margin: "20px auto", borderRadius: "10px" }}
    >
      <div className="drop-stuff">
        <div id="drop-zone">
          <ReactDropzone setFiles={setFiles} />
        </div>
        <div>
          {files.length > 0 && (
            <ReactCropper setImage={setImage} imagePreview={files[0].preview} />
          )}
        </div>
        <div>
          {files.length > 0 && (
            <React.Fragment>
              <div
                className="img-preview"
                style={{
                  minHeight: "200px",
                  minWidth: "200px",
                  overflow: "hidden",
                }}
              />
              {/* <div className="mt-3 product-upload-btn-wrapper">
                <button className="ml-5" onClick={handleUploadImage}>
                  Upload Image
                </button>
              </div> */}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
