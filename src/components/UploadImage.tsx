

type UploadImageProps = {
  onImageSelect: (imageURL: string) => void;
};

export default function UploadImage({ onImageSelect }: UploadImageProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL)
      onImageSelect(imageURL);
    }
  };

  return (
    <div>
      <div>
        <label>Upload Image</label>
      </div>
      <div>
        <label htmlFor="imageInput">
          <img
            src="/src/assets/upload.png"
            alt="Upload"
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
