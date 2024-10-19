import React, { useState } from 'react';
import apiService from '../../ApiServices/ApiService';

function FileUploadComponent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the selected file
  };

  const handleFileUpload = async () => {
    if (file) {
      try {
        const result = await apiService.postFile(file); // Call the API service
        console.log('File uploaded successfully:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('Please select a file to upload');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default FileUploadComponent;
