import { useState } from "react";
import UploadImage from "../components/UploadImage.tsx";
import "../styles/ImagePickerPage.css";
import { detectFacialExpression } from "../components";
export function ImagePickerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("Please select or take a picture first!");
      return;
    }
    await detectFacialExpression(selectedImage);
    // כאן אפשר לשלוח לשרת או לנווט לדף השירים
  };

  return (
    <>
      <div className="image-handle">
        <div className="h2-uploadImage">
          <h2>Choose how to provide your photo</h2>
        </div>
        {selectedImage && <img src={selectedImage} alt="preview" />}

        <div className="too-options">
          <div className="uploadImage-section">
            <UploadImage onImageSelect={handleImageSelect} />
          </div>

          <div className="selfTakingPicture-section">
            <div>
              <div>
                <label>Upload Image</label>
              </div>
              <div>
                <img
                  src="/src/assets/familiar_face_and_zone.png"
                  alt="preview"
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit}>Continue</button>
      </div>
    </>
  );
}
