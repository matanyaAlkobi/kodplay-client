type UploadImageProps = {
  onImageSelect: (imageURL: string) => void;
};

export  default function UploadImage({ onImageSelect }: UploadImageProps) {
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
      <label>
        Upload Image
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
    </div>
  );
}

