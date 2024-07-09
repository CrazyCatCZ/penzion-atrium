import {
  LaundryIcon,
  TVRoundedIcon,
  TransportIcon,
  CupIcon,
  SupperIcon,
  BathtubIcon,
  FridgeIcon,
  TVSquareIcon,
  ToiletIcon,
} from "@/public/vectors/getIcons";
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
  Room8TImage,
} from "@/public/images/getImages";
import { useTranslations } from "next-intl";

const AccommodationData = () => {
  const tAcc = useTranslations("Accommodation");

  const tourists = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
  ];

  const standards = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
  ];

  const meals = [
    {
      icon: <CupIcon className="w-5 h-5" />,
      title: tAcc("breakfast"),
      price: 90,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: tAcc("halfBoard"),
      price: 180,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: tAcc("fullBoard"),
      price: 270,
    },
  ];

  const others = [
    {
      icon: <TransportIcon className="w-5 h-5" />,
      title: tAcc("transportTitle"),
      description: tAcc("transportDescription"),
      price: "10 Kč/km",
    },
    {
      icon: <LaundryIcon className="w-5 h-5" />,
      title: tAcc("laundryTitle"),
      description: tAcc("laundryDescription"),
      price: "200 Kč",
    },
    {
      icon: <TVRoundedIcon className="w-5 h-5" />,
      title: tAcc("tvTitle"),
      description: tAcc("tvDescription"),
      price: tAcc("tvPrice"),
    },
  ];

  const rooms = [
    { tourist: Room1TImage, standard: Room1SImage },
    { tourist: Room2TImage, standard: Room2SImage },
    { tourist: Room3TImage, standard: Room3TImage2 },
    { tourist: Room4TImage, standard: Room4SImage },
    { tourist: Room5TImage, standard: Room5TImage },
    { tourist: Room6TImage, standard: Room6TImage },
    { tourist: Room7TImage, standard: Room7TImage },
    { tourist: Room8TImage, standard: Room8TImage },
  ];

  return {
    others,
    meals,
    tourists,
    standards,
    rooms,
  };
};

export default AccommodationData;
