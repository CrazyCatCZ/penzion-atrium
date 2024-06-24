import { useTranslations } from "next-intl";

import GalleryData from "@/data/GalleryData";
import GallerySection from "./GallerySection";

const Gallery = () => {
  const tGallery = useTranslations("Gallery");
  const { roomImages, kitchenImages, outsideImages, toiletImages } =
    GalleryData();

  return (
    <div>
      <GallerySection title={tGallery("rooms")} images={roomImages} />
      <GallerySection title={tGallery("kitchen")} images={kitchenImages} />
      <GallerySection title={tGallery("exterior")} images={outsideImages} />
      <GallerySection title="WC" images={toiletImages} />
    </div>
  );
};

export default Gallery;
