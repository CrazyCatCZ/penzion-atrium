import {
  TrutnovCentrumImage,
  TrutnovCentrumResponsiveImage,
  KrkonoseImage,
  KrkonoseResponsiveImage,
  AdrspachImage,
  AdrspachResponsiveImage,
  KuksImage,
  KuksResponsiveImage,
  ZooImage,
  ZooResponsiveImage,
  DolceImage,
} from "@/public/images/getImages";

const GalleryData = () => {
  const galleryImages = [
    {
      src: TrutnovCentrumImage,
    },
    {
      src: KrkonoseImage,
    },
    {
      src: AdrspachImage,
    },
    {
      src: KuksImage,
    },
    {
      src: ZooImage,
    },
    {
      src: DolceImage,
    },
  ];

  return { galleryImages };
};

export default GalleryData;
