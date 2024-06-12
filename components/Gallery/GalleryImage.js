import Image from "next/image";

const GalleryImage = ({ src }) => {
  return (
    <div>
      <Image
        src={src}
        height={200}
        width={200}
        className="h-auto max-w-full rounded-lg"
        alt=""
      />
    </div>
  );
};

export default GalleryImage;
