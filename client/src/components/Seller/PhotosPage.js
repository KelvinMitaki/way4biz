import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDropzone from "./ReactDropzone";
import ReactCropper from "./ReactCropper";

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
  return (
    <div>
      <ReactDropzone setFiles={setFiles} />
      {files.length > 0 && (
        <ReactCropper setImage={setImage} imagePreview={files[0].preview} />
      )}
      <button onClick={handleUploadImage}>Upload Image</button>
      {files.length > 0 && (
        <div
          className="img-preview"
          style={{ minHeight: "200px", minWidth: "200px", overflow: "hidden" }}
        />
      )}
    </div>
  );
};

export default PhotosPage;
