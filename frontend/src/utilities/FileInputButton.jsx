import React, { useRef } from 'react';

const FileInputButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onFileSelect(files);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg px-4 py-2"
        onClick={handleFileSelect}
      >
        Select File
      </button>
    </div>
  );
};

export default FileInputButton;
