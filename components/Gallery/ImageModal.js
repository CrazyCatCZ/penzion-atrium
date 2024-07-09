import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const ImageModal = ({
  galleryImages,
  handleCloseModal,
  prevSlide,
  nextSlide,
  slideNumber,
}) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="absolute top-10 right-10 text-5xl text-white cursor-pointer opacity-60 hover:opacity-100"
        onClick={handleCloseModal}
      />
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        className="absolute sm:left-10 left-8 sm:text-5xl text-4xl text-white cursor-pointer sm:opacity-60 hover:opacity-100"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        className="absolute sm:right-10 right-8 sm:text-5xl text-4xl text-white cursor-pointer sm:opacity-60 hover:opacity-100"
        onClick={nextSlide}
      />
      <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
        <Image
          className="max-w-[573px] max-h-[310px] h-full pointer-events-none select-none"
          src={galleryImages[slideNumber].src}
          alt={galleryImages[slideNumber].alt}
        />
      </div>
    </div>
  );
};

export default ImageModal;
