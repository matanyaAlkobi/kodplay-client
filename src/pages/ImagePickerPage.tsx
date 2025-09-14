import { useState } from "react";
import  UploadImage  from "../components/UploadImage.tsx";

export function ImagePickerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (imageURL: string) => {
    setSelectedImage(imageURL);
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      alert("Please select or take a picture first!");
      return;
    }
    alert("Image is ready to be processed!");
    // כאן אפשר לשלוח לשרת או לנווט לדף השירים
  };

  return (
    <div>
      <h2>Choose how to provide your photo</h2>

      <UploadImage onImageSelect={handleImageSelect} />

      {selectedImage && <img src={selectedImage} alt="preview" />}

      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}
