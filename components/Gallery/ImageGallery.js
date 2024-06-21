"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const ImageGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const documentRef = useRef(typeof document !== "undefined" ? document : null);

  const prevSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages]);

  const nextSlide = useCallback(() => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  }, [galleryImages]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "d" || event.key === "ArrowRight") {
        nextSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    if (documentRef.current) {
      documentRef.current.addEventListener("keydown", handleKeyDown);

      return () => {
        documentRef.current.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  return (
    <div>
      {openModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="absolute top-10 right-10 text-5xl text-white cursor-pointer opacity-60 hover:opacity-100"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="absolute left-10 text-5xl text-white cursor-pointer opacity-60 hover:opacity-100"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="absolute right-10 text-5xl text-white cursor-pointer opacity-60 hover:opacity-100"
            onClick={nextSlide}
          />
          <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
            <Image
              className="max-w-full max-h-full pointer-events-none select-none"
              src={galleryImages[slideNumber].src}
              alt={galleryImages[slideNumber].alt}
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2.5 items-center justify-start max-w-full mx-auto">
        {galleryImages &&
          galleryImages.map((slide, index) => (
            <div
              className="w-[265px] cursor-pointer"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                className="max-w-full transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
