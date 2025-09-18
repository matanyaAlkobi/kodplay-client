import { useRef, useState } from "react";

type UploadImageProps = {
  onImageSelect: (imageURL: string) => void;
};

export function UploadImage({ onImageSelect }: UploadImageProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);
      onImageSelect(imageURL);
    }
  };

  return (
    <label
      htmlFor="imageInput"
      className="option-card"
      style={{ cursor: "pointer" }}
    >
      <div className="option-icon-container">
        <img className="option-icon" src="/images/upload.png" alt="Upload" />
      </div>
      <div>
        <h3 className="option-title">Upload Image</h3>
        <p className="option-description">Choose a photo from your device</p>
      </div>
      <input
        id="imageInput"
        className="hidden-file-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </label>
  );
}

export function TakePicture({ onImageSelect }: UploadImageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const openCam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const capture = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL("image/png");
      setImgURL(dataUrl);
      onImageSelect(dataUrl);
    }
  };

  return (
    <div className="option-card">
      {!isCameraOpen && (
        <>
          <div className="option-icon-container">
            <img
              className="option-icon"
              src="/images/camera.png"
              alt="Camera"
            />
          </div>
          <div>
            <h3 className="option-title">Take Picture</h3>
            <p className="option-description">Use your device camera</p>
          </div>
          <button className="camera-activation-btn" onClick={openCam}>
            Open Camera
          </button>
        </>
      )}

        <div className="camera-interface">
          <video
            className="camera-video-stream"
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />
          <button className="capture-photo-btn" onClick={capture}>
            Capture Photo
          </button>
        </div>
      
    </div>
  );
}
