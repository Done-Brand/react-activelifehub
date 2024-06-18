import React from "react";

const FileUploader = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    if (e.target.files) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="input-group">
      <label htmlFor="file" className="sr-only">
        Choose a file
      </label>
      <input id="file" type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
