import GalleryData from "@/data/GalleryData";
import ImageGallery from "./ImageGallery";

const Gallery = () => {
  const { galleryImages } = GalleryData();

  return (
    <div>
      <ImageGallery galleryImages={galleryImages} />
    </div>
  );
};

export default Gallery;
