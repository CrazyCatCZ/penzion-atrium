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

import {
  BottomKitchenImage,
  UpperKitchenImage,
} from "@/public/images/getImages";

import {
  WC1Image,
  WC2Image,
  WC3Image,
  WC4Image,
  WC5Image,
  WC6Image,
} from "@/public/images/getImages";

import {
  FrontImage,
  FrontMainImage,
  PlaygroundImage,
  EntranceImage,
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
      src: BottomKitchenImage,
    },
    {
      src: UpperKitchenImage,
    },
  ];

  const outsideImages = [
    {
      src: FrontImage,
    },
    {
      src: FrontMainImage,
    },
    {
      src: PlaygroundImage,
    },
    {
      src: EntranceImage,
    },
  ];

  const toiletImages = [
    {
      src: WC1Image,
    },
    {
      src: WC2Image,
    },
    {
      src: WC3Image,
    },
    {
      src: WC4Image,
    },
    {
      src: WC5Image,
    },
    {
      src: WC6Image,
    },
  ];

  return { roomImages, kitchenImages, outsideImages, toiletImages };
};

export default GalleryData;
