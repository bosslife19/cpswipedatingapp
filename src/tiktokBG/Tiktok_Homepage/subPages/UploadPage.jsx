import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileSelect = (file) => {
    navigate('/upload-details', { state: { file: file } });
  };

  return (
    <div className="upload-page">
      <Link to="/admin">
        <FaArrowLeftLong />
      </Link>
      <h1>Upload</h1>
      <div className="upload_contains">
        <div className="upload-container">
          <div
            className="drop-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p>Drag & Drop file here</p>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={(e) => handleFileSelect(e.target.files[0])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
