import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadImage, TakePicture } from "../components";
import "../styles/ImagePickerPage.css";



import Playlist from "../components/Playlist.tsx";
  
  


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
    <>
      <div className="image-handle">
        <div className="h2-uploadImage">
          <h2>Choose how to provide your photo</h2>
        </div>
        {selectedImage && <img src={selectedImage} alt="preview" />}

        <div className="too-options">
          <UploadImage onImageSelect={handleImageSelect} />

          <TakePicture onImageSelect={handleImageSelect} />
        </div>

        <button className="expression-analysis-btn" onClick={handleSubmit}>Expression Analysis</button>
        

      </div>
    </>
  );
}
