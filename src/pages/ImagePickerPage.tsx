import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadImage, TakePicture } from "../components";
import "../styles/ImagePickerPage.css";

export function ImagePickerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageSelect = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("Please select or take a picture first!");
      return;
    }

    navigate("/face-detection", { state: { imageURL: selectedImage } });
  };

  return (
    <div className="main-container">
      <div className="hero-section">
        <h1 className="hero-title">Face Expression Analysis</h1>
        <p className="hero-subtitle">Choose how to provide your photo</p>
      </div>

      {selectedImage && (
        <div className="image-preview-section">
          <span className="preview-label">Selected Image</span>
          <img 
            className="selected-image-preview" 
            src={selectedImage} 
            alt="Selected preview" 
          />
        </div>
      )}

      <div className="upload-options-grid">
        <UploadImage onImageSelect={handleImageSelect} />
        <TakePicture onImageSelect={handleImageSelect} />
      </div>

      <div className="analysis-action-section">
        <button className="start-analysis-btn" onClick={handleSubmit}>
          Start Analysis
        </button>
        <p className="analysis-hint">
          Upload or take a photo to begin facial expression analysis
        </p>
      </div>
    </div>
  );
}