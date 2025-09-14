//Finds the image in files and returns it
export default function DisplayImage({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  alt: string;
}) {
  return (
    <>
      <img src={imgSrc} alt={alt} />
    </>
  );
}
