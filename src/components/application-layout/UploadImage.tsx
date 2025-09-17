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
    <div className="upload-image">
      <div>
        <label className="upload-image-label">Upload Image</label>
      </div>
      <div>
        <label htmlFor="imageInput">
          <img
          className="upload-image-icon"
            src="/images/upload.png"
            alt="Upload"
          />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}

export function TakePicture({ onImageSelect }: UploadImageProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);
      onImageSelect(imageURL);
    }
  };

  return (
    <div className="take-picture">
      <label className="take-picture-label">Take a picture</label>

      <label htmlFor="imageInput">
        <img
        className="take-picture-icon"
          src="/images/familiar_face_and_zone.png"
          alt="Upload"
  
        />
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
}
