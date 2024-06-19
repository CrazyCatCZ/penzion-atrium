import GalleryData from "@/data/GalleryData";
import ImageGallery from "./ImageGallery";

const Gallery = () => {
  const { galleryImages } = GalleryData();

  return <ImageGallery galleryImages={galleryImages} />;
};

export default Gallery;
