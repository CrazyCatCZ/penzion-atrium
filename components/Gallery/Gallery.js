import GalleryData from "@/data/GalleryData";
import GallerySection from "./GallerySection";
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

  return (
    <div>
      <GallerySection title="Pokoje" images={roomImages} />
      <GallerySection title="Kuchyň" images={kitchenImages} />
      <GallerySection title="Exteriér" images={outsideImages} />
      <GallerySection title="WC" images={toiletImages} />
    </div>
  );
};

export default Gallery;
