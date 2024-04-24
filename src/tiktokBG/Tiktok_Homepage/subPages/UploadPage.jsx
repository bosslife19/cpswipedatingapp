// UploadPage.js
import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GrStatusGood } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const UploadPage = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...e.dataTransfer.files];
    updateFiles(newFiles);
  };

  const handleFileSelect = (e) => {
    const newFiles = [...e.target.files];
    updateFiles(newFiles);
  };

  const updateFiles = (newFiles) => {
    // Ensure only three files are added
    if (newFiles.length + files.length <= 3) {
      setFiles([...files, ...newFiles.slice(0, 3 - files.length)]);
    }
  };

  const handleSubmit = () => {
    // Implement your upload logic here
    console.log('Uploaded files:', files);
    // Reset files state after upload
    setFiles([]);
  };

  return (
    <div className="upload-page">
      <Link to="/admin">
        <FaArrowLeftLong/>
      </Link>
      <h1>Upload</h1>
      <div className="upload_contains">
        <div className="upload-container">
          <div
            className="drop-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p>Drag & Drop files here</p>
            <input
              type="file"
              accept="image/*, video/*"
              multiple
              onChange={handleFileSelect}
            />
            <button onClick={handleSubmit}>Upload</button>
          </div>
        </div>
        <div className="selected-files">
          {files.map((file) => (
            <div key={file.name} className="file">
              <span>
                <GrStatusGood />
              </span>
              <p>{file.name}</p>
              <p>{Math.round(file.size / 1024)} KB</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
