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
  const roomImages = [
    {
      src: TrutnovCentrumImage,
    },
    {
      src: TrutnovCentrumImage,
    },
    {
      src: TrutnovCentrumImage,
    },
    {
      src: TrutnovCentrumImage,
    },
    {
      src: TrutnovCentrumImage,
    },
    {
      src: TrutnovCentrumImage,
    },
  ];
  const kitchenImages = [
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
  const outsideImages = [
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
  const toiletImages = [
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

  return { roomImages, kitchenImages, outsideImages, toiletImages };
};

export default GalleryData;
