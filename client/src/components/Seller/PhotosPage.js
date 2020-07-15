import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDropzone from "./ReactDropzone";

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
      <button onClick={handleUploadImage}>Upload Image</button>
    </div>
  );
};

export default PhotosPage;
