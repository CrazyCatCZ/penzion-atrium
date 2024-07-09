import {
  TrutnovCentrumImage,
  KrkonoseImage,
  AdrspachImage,
  KuksImage,
  ZooImage,
  DolceImage,
} from "@/public/images/getImages";
import {
  Room1TImage,
  Room1SImage,
  Room2TImage,
  Room2SImage,
  Room3TImage,
  Room3TImage2,
  Room4TImage,
  Room4SImage,
  Room5TImage,
  Room6TImage,
  Room7TImage,
} from "@/public/images/getImages";

const GalleryData = () => {
  const roomImages = [
    {
      src: Room1TImage,
    },
    {
      src: Room1SImage,
    },
    {
      src: Room2TImage,
    },
    {
      src: Room2SImage,
    },
    {
      src: Room3TImage,
    },
    {
      src: Room3TImage2,
    },
    {
      src: Room4TImage,
    },
    {
      src: Room4SImage,
    },
    {
      src: Room5TImage,
    },
    {
      src: Room6TImage,
    },
    {
      src: Room7TImage,
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
