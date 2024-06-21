import GalleryData from "@/data/GalleryData";
import ImageGallery from "./ImageGallery";

const Gallery = () => {
  const { roomImages, kitchenImages, outsideImages, toiletImages } =
    GalleryData();

  const galleryImages = [
    ...roomImages,
    ...kitchenImages,
    ...outsideImages,
    ...toiletImages,
  ];

  return <ImageGallery galleryImages={galleryImages} />;
};

export default Gallery;
