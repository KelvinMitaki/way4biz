import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ setFiles }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      setFiles(
        acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file)
        }))
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: "image/*"
  });
  return (
    <div {...getRootProps()} className={isDragActive && `dropzone--isActive`}>
      <input {...getInputProps()} />
    </div>
  );
};

export default Dropzone;
