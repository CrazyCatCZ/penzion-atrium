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
      alt: "Room1SImage",
    },
    {
      src: Room1SImage,
      alt: "Room1TImage",
    },
    {
      src: Room2TImage,
      alt: "Room2TImage",
    },
    {
      src: Room2SImage,
      alt: "Room2SImage",
    },
    {
      src: Room3TImage,
      alt: "Room3TImage",
    },
    {
      src: Room3TImage2,
      alt: "Room3TImage2",
    },
    {
      src: Room4TImage,
      alt: "Room4TImage",
    },
    {
      src: Room4SImage,
      alt: "Room4SImage",
    },
    {
      src: Room5TImage,
      alt: "Room5TImage",
    },
    {
      src: Room6TImage,
      alt: "Room6TImage",
    },
    {
      src: Room7TImage,
      alt: "Room7TImage",
    },
  ];

  const kitchenImages = [
    {
      src: BottomKitchenImage,
      alt: "BottomKitchenImage",
    },
    {
      src: UpperKitchenImage,
      alt: "UpperKitchenImage",
    },
  ];

  const outsideImages = [
    {
      src: FrontImage,
      alt: "FrontImage",
    },
    {
      src: FrontMainImage,
      alt: "FrontMainImage",
    },
    {
      src: PlaygroundImage,
      alt: "PlaygroundImage",
    },
    {
      src: EntranceImage,
      alt: "EntranceImage",
    },
  ];

  const toiletImages = [
    {
      src: WC1Image,
      alt: "WC1Image",
    },
    {
      src: WC2Image,
      alt: "WC2Image",
    },
    {
      src: WC3Image,
      alt: "WC3Image",
    },
    {
      src: WC4Image,
      alt: "WC4Image",
    },
    {
      src: WC5Image,
      alt: "WC5Image",
    },
    {
      src: WC6Image,
      alt: "WC6Image",
    },
  ];

  return { roomImages, kitchenImages, outsideImages, toiletImages };
};

export default GalleryData;
