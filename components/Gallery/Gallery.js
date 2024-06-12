import GalleryImage from "./GalleryImage";
import GalleryData from "@/data/GalleryData";

const Gallery = () => {
  const { galleryImages } = GalleryData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <GalleryImage
            key={index}
            src="/../public/images/gallery/1-home.png"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
